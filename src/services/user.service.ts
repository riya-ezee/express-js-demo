import con from "../../config/database";
import { User } from "../entities/user.entity";

class UserService {
  public async getAllUser() {
    const userRepository = (await con).getRepository(User);
    const userData = await userRepository.find();
    // const userData = await (await con).manager.find(User);
    if (!userData)
      throw {
        message: "no result ",
        code: 101,
      };
    return userData;
    // return new Promise(function (resolve, reject) {
    //   try {
    //     // var sql = "SELECT * FROM user";
    //     // con.query(sql, function (err: any, result: unknown) {
    //     //   if (err) throw err;

    //     //   resolve(result);
    //     // });
    //   } catch (error) {
    //     console.log("error" + error);
    //   }
    // });
  }

  public async findUserByUserId(req: any) {
    const userData = await (await con).manager.findOne(User, req.params.id);
    if (!userData)
      throw {
        message: "no result",
        code: 101,
      };
    return userData;
    // return new Promise(function (resolve, reject) {
    //   try {
    //     con.query("SELECT * FROM user WHERE no = " + [req.params.id], function (
    //       err: any,
    //       result: unknown
    //     ) {
    //       if (err) throw err;
    //       console.log("Record featch");
    //       resolve(result);
    //     });
    //   } catch (error) {
    //     console.log("error" + error);
    //   }
    // });
  }

  public async deleteUserByUserId(req: any) {
    const userData = await (await con).manager.delete(User, req.params.id);
    if (!userData)
      throw {
        message: "no result",
        code: 101,
      };
    return userData;
    // return new Promise(function (resolve, reject) {
    //   try {
    //     con.query(
    //       "delete FROM user WHERE no = " + [req.params.id],
    //       (error: any, results: unknown) => {
    //         if (results) {
    //           resolve(results);
    //         }
    //       }
    //     );
    //   } catch (error) {
    //     console.log("error" + error);
    //   }
    // });
  }

  public async insertUserData(req: any) {
    const userData = await (await con).manager.save(User, req.body);
    if (!userData)
      throw {
        message: "no result",
        code: 101,
      };
    return userData;
    // return new Promise(function (resolve, reject) {
    //   try {
    //     var postData = req.body;
    //     console.log(postData);
    //     con.query(
    //       "INSERT INTO user(name) values(" + req.body.name + ")",

    //       (error: any, results: unknown) => {
    //         if (error) throw error;
    //         console.log("Record featch");
    //         resolve(results);
    //       }
    //     );
    //   } catch (error) {
    //     console.log("error" + error);
    //   }
    // });
  }

  public async updateUserData(req: any) {
    const userData = await (await con).manager.update(
      User,
      req.params.id,
      req.body
    );
    if (!userData)
      throw {
        message: "no result",
        code: 101,
      };
    return userData;
  }
}

export default UserService;
