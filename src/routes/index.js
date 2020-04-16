const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
require('express-async-errors')
const {NotFoundMiddleware,ErrorMiddleware} = require('./../middlewares/index')


module.exports = function({HomeRoutes}){
  const router = express.Router()
  const apiRouter = express.Router()
//Middlewares que se ejecutaran de principio
  apiRouter
  .use(express.json())
  .use(cors())
  .use(helmet())
  .use(compression())

  apiRouter.use("/home",HomeRoutes)

  router.use("/v1/api",apiRouter)
  router.use(NotFoundMiddleware)
  router.use(ErrorMiddleware)

  return router
}