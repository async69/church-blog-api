import { IBlogDocument, IBlogModel } from "./blog.types"

export async function findOneOrCreate(this: IBlogModel, blog: IBlogDocument): Promise<IBlogDocument> {
    const foundBlog = await this.findOne({ _id: blog._id })
    if (foundBlog) {
        return foundBlog
    } else {
        return this.create(blog)
    }
}

export async function findByAuthor(this: IBlogModel, author: string): Promise<IBlogDocument> {
    const foundBlog = await this.findOne({ author })
    if (foundBlog) return foundBlog
    else return null as any
}