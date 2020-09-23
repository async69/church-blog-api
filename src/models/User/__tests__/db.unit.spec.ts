import { UserModel } from '../user.model'

const run = () => "Hello"

describe('Create users', () => {
    it('Should create new users successfully', () => {
        const mockUser = {
            _id: "some id",
            firstName: 'one',
            lastName: 'two',
            age: 23
        }

        const spy = jest.spyOn(UserModel, "create").mockReturnValueOnce(mockUser as any)
        UserModel.create(mockUser)
        const spyCreatedUser = spy.mock.results[0].value
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spyCreatedUser.firstName).toEqual(mockUser.firstName)
        spy.mockReset()
        // expect(typeof run()).toEqual("string")
    })
})