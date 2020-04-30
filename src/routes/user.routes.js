const {Router} = require('express')
const {AuthMiddleware,ParseMiddleware,CacheMiddleware} = require('../middlewares')
const {CACHE_TIME} = require('../helpers')
module.exports = function({UserController}){
  const router = Router()

  router.get('/:userId',UserController.get)
  router.get('/',[AuthMiddleware,ParseMiddleware,CacheMiddleware(CACHE_TIME.ONE_HOUR)],UserController.getAll)
  router.patch('/:userId',UserController.update)
  router.delete('/:userId',UserController.delete)

  return router
}