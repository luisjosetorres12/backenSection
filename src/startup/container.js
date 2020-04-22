//Pasos para crear un contenedor de inyeccion de depencendias
 const {createContainer, asClass, asValue, asFunction} = require('awilix')


 //config
  const config = require('./../config/index')
  const app = require('.')
 //Services
 const {HomeService} = require('./../services/index')
 

 //Controllers
const {HomeController} = require('./../controllers/index')

//Routes
const {HomeRoutes} = require('../routes/index.routes')
const Routes = require('../routes/index')

//Models
const {User,Comment,Idea} = require('./../models/index')


//Repositories

const {UserRepository,IdeaRepository,CommentRepository} = require('./../repositories')

const container = createContainer()

container
.register({
  router: asFunction(Routes).singleton(),
  config: asValue(config),
  app: asClass(app).singleton()
})
.register({
  HomeService: asClass(HomeService).singleton()
}).register({
  HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
  HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({
  User: asValue(User),
  Idea: asValue(Idea),
  Comment: asValue(Comment)
}).register({
  UserRepository: asClass(UserRepository).singleton(),
  IdeaRepository: asClass(IdeaRepository).singleton(),
  CommentRepository: asClass(CommentRepository).singleton()
})

 module.exports = container