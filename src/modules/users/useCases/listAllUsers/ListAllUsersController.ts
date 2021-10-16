import { Request, Response } from "express";
import { usersRoutes } from "routes/users.routes";
import { parse } from "uuid";
import { IRequest } from "../createUser/CreateUserUseCase";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const  {user_id}:any  = request.headers
      const all = this.listAllUsersUseCase.execute(user_id)
    return response.json(all)

    } catch (error) {
      return response.status(400).json({error: error})
      
    }
    
  }
}

export { ListAllUsersController };
