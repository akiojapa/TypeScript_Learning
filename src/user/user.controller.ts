import {Request, Response} from 'express'
import userService from './user.service'

class UserController {

    public async create(req: Request, res: Response){
        const user = await userService.createuser(req.body)
        return res.status(200).json(user)
    }

}


export default new UserController()