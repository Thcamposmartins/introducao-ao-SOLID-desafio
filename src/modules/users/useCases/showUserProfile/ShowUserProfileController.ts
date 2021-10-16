import { Request, Response } from "express";
import { IRequest } from "../createUser/CreateUserUseCase";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const  {user_id}:any  = request.headers
      const user = this.showUserProfileUseCase.execute(user_id)
     return response.json(user)

    } catch (error) {
      return response.status(400).json({error: error})      
    }    
  }
}

export { ShowUserProfileController };
