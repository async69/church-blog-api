import express from "express"
import { ApolloServer } from "apollo-server-express"
import depthLimit from "graphql-depth-limit"
import { createServer } from "http"
import compression from "compression"
import cors from "cors"
import mongoose from "mongoose"
import schema from "./schema"
import keys from "./constants/keys"

const app = express()
const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    introspection: true
})

app.use('*', cors())
app.use(compression())
server.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)
httpServer.listen(
    { port: 4000 },
    (): void => {
        mongoose.connect(keys.deployedDBUri, { useUnifiedTopology: true, useNewUrlParser: true })
        mongoose.connection.once('open', () => {
            console.info('Connected to Mongo via Mongoose');
        })
        mongoose.connection.on('error', (err) => {
            console.error('Unable to connect to Mongo via Mongoose', err);
        })
        console.log(`\n🚀 GraphQL is now running on http://localhost:4000/graphql`)
    }
)