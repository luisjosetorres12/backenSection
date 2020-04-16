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
})

 module.exports = container