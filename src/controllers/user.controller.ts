import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";

class UsersController {
  public userService = new userService();

  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findOneUserData = await this.userService.getAllUser();
      console.log(findOneUserData);
      res.status(200).json({ data: findOneUserData });
    } catch (error) {
      next(error);
    }
  };

  public getUserByUserId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userData = await this.userService.findUserByUserId(req);
      console.log(userData);
      res.status(200).send({ data: userData });
    } catch (error) {
      next(error);
    }
  };

  public deleteUserByUserId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userData = await this.userService.deleteUserByUserId(req);
      console.log(userData);
      res.status(200).send({ data: userData });
    } catch (error) {
      next(error);
    }
  };

  public insertUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      console.log(req);

      const userData = await this.userService.insertUserData(req);
      console.log(userData);
      res.status(200).send({ data: userData });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      console.log(req);

      const userData = await this.userService.updateUserData(req);
      console.log(userData);
      res.status(200).send({ data: userData });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
