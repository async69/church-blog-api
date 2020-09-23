import { Schema } from "mongoose"
import { findByAuthor, findOneOrCreate } from "./blog.statics"
import { setLastUpdated } from "./blog.methods"

const BlogSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
})

BlogSchema.statics.findOneOrCreate = findOneOrCreate
BlogSchema.statics.findByAuthor = findByAuthor

BlogSchema.methods.setLastUpdated = setLastUpdated

export default BlogSchema