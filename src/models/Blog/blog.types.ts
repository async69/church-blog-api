import { Document, Model } from "mongoose"

export interface IBlog {
    title: string
    author: string
    content: string
    dateOfEntry?: Date
    lastUpdated?: Date
}

export interface IBlogDocument extends IBlog, Document {
    setLastUpdated: (this: IBlogDocument) => Promise<void>
}

export interface IBlogModel extends Model<IBlogDocument> {
    findOneOrCreate: (
        this: IBlogModel,
        {
            title, author, content
        }: { title: string, author: string, content: string }
    ) => Promise<IBlogDocument>
    findByAuthor: (
        this: IBlogModel,
        author: string
    ) => Promise<IBlogDocument>
}