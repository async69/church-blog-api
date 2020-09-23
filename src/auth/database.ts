import { connect as connectDB, connection, Connection, disconnect as disconnectDB } from "mongoose";
import keys from '../constants/keys'

export let database: Connection

export const connect = (): Promise<typeof import("mongoose")> => {
    database = connection

    connection.on("open", async () => {
        // tslint:disable-next-line: no-console
        console.log("Connected to database")
    })

    connection.on("error", () => {
        // tslint:disable-next-line: no-console
        console.log("Error connecting to database")
    })

    return connectDB(keys.deployedDBUri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
}

export const disconnect = () => {
    if (!database) return
    disconnectDB()
}