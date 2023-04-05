import {Router} from 'express'
import userController from './user/user.controller'



const routes = Router()


routes.post('/users', userController.create)

export default routes