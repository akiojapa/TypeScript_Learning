import User from "./User";
import { UserType} from "./Types/UserTypes";

class UserService {

    async createuser(data: UserType) {
        const result = await User.create(data)
        console.log("Usuário criado")
        return result
    }


}

export default new UserService()