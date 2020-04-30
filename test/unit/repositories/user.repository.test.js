const {UserRepository} = require('../../../src/repositories')
const mockingoose = require('mockingoose').default
const {User} = require('../../../src/models')
let {UserModelMock: {user,users}} = require('../../mocks')


describe('User Repository Test',()=>{
  beforeEach(()=>{
    mockingoose.resetAll()
    jest.clearAllMocks()
  })

  it('Should Return a user by id',async ()=>{
    const _user = {...user}
    delete _user.password
    mockingoose(User).toReturn(user,"findOne")

    const _userRepository = new UserRepository({User})
    const expected = await _userRepository.get(_user._id)

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user)
  })
})