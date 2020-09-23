import { IUserDocument, IUserModel } from "./user.types"

export async function findOneOrCreate (this: IUserModel, userID: string): Promise<IUserDocument> {
    const record = await this.findOne({ userID })
    if (record) {
        return record
    } else {
        return null as any
    }
}