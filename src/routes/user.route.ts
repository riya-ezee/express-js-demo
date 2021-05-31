import { Router } from "express";
import UsersController from "../controllers/user.controller";
import dtoValidationMiddleware from "../middlewares/dtovalidation.middleware";
import validationParamMiddleware from "../middlewares/validationParam.middleware";
import { UserDto, UpdateUserParamDto, UpdateUserDto } from "../dtos/user.dto";

class UsersRoute {
  public path = "/users";
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getUser);
    this.router.get(
      `${this.path}/:id`,
      validationParamMiddleware(UpdateUserParamDto),
      this.usersController.getUserByUserId
    );
    this.router.delete(
      `${this.path}/:id`,
      validationParamMiddleware(UpdateUserParamDto),
      this.usersController.deleteUserByUserId
    );
    this.router.post(
      `${this.path}`,
      dtoValidationMiddleware(UserDto),
      this.usersController.insertUser
    );
    this.router.put(
      `${this.path}/:id`,
      validationParamMiddleware(UpdateUserParamDto),
      dtoValidationMiddleware(UpdateUserDto),
      this.usersController.updateUser
    );
  }
}

export default UsersRoute;
