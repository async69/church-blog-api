import { Document } from "mongoose"
import { IBlogDocument } from "./blog.types"

export async function setLastUpdated(this: IBlogDocument): Promise<void> {
    const now = new Date()
    if (!this.lastUpdated || this.lastUpdated < now) {
        this.lastUpdated = now
        await this.save()
    }
}