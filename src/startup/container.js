//Pasos para crear un contenedor de inyeccion de depencendias
 const {createContainer, asClass, asValue, asFunction} = require('awilix')


 //config
  const config = require('./../config/index')
  const app = require('.')
 //Services
 const {HomeService,UserService,IdeaService,CommentService} = require('./../services/index')
 

 //Controllers
const {HomeController,UserController,IdeaController,CommentController} = require('./../controllers/index')

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
  HomeService: asClass(HomeService).singleton(),
  UserService:  asClass(UserService).singleton(),
  CommentService: asClass(CommentService).singleton(),
  IdeaService: asClass(IdeaRepository).singleton()
}).register({
  HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  UserController: asClass(UserController.bind(UserController)).singleton(),
  CommentController: asClass(CommentController.bind(CommentController)).singleton(),
  IdeaController: asClass(IdeaController.bind(IdeaController)).singleton()
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