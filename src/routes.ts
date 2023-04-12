import {Router} from 'express'
import userController from './user/user.controller'
import productController from './products/product.controller'



const routes = Router()



routes.post('/product', productController.create)
routes.get('/product', productController.list)
routes.get('/product/:id', productController.find)
routes.put('/product/:id', productController.update)
routes.delete('/product/:id', productController.delete)
routes.get('/products', productController.stock)

routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

export default routes