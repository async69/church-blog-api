import { IResolvers } from "graphql-tools"
import { BlogModel } from "../../models/Blog/blog.model"
import { IBlogDocument } from "../../models/Blog/blog.types"

const resolverMap: IResolvers = {
    Query: {
        async blogs(): Promise<IBlogDocument[]> {
            const fetchedBlogs = await BlogModel.find({})
            return fetchedBlogs
        }
    },

    Mutation: {
        async addBlog(_: void, { title, author, content }): Promise<IBlogDocument> {
            const createdBlog = await BlogModel.create({
                title, author, content
            })
            return createdBlog
        }
    }
}

export default resolverMap