import { model } from "mongoose"
import { IBlogDocument } from "./blog.types"
import BlogSchema from "./blog.schema"

export const BlogModel = model<IBlogDocument>("blogs", BlogSchema)