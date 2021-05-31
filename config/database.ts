// import "reflect-metadata";
// import * as mysql from "mysql";
// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "sample",
// });
// con.connect();

// export default con;

import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "../src/entities/user.entity";

const con = createConnection({
  type: "mysql",
  host: "localhost",
  // port: 3306,
  username: "root",
  password: "",
  database: "sample",
  entities: [User],
  synchronize: true,
  logging: false,
});
con.then(async (connection) => {
  console.log(
    "Database connected: " +
      (connection.isConnected ? connection.isConnected : false)
  );
});

export default con;
