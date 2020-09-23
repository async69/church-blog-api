import { connect, disconnect } from "../../../auth/database"
import { BlogModel } from "../blog.model"

jest.setTimeout(10000)

describe('Should connect to DB', () => {
    test('should connect successfully and create user and fetch user', async done => {
        connect()
            .then(async () => {
                await BlogModel.deleteMany({})
                const blogs = [
                    { title: 'Some title', author: 'some author', content: 'Some content' },
                ]
                try {
                    for (const blog of blogs) {
                        await BlogModel.create(blog)
                    }
                } catch(e) {
                    // console.error(e)
                }

                const foundBlog = await BlogModel.findOne({ author: blogs[0].author })
                expect(foundBlog).toEqual(blogs[0])

                await BlogModel.deleteMany({})
                disconnect()
                done()
            })
            .catch(err => {
                done(false)
            })
    })
})