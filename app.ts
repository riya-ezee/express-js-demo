// import * as cors from "cors";
import express from "express";
import * as bodyParser from "body-parser";
import usersRouter from "./src/routes/user.route";
import swaggerJSDoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

// const app = require("express");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", new usersRouter().router);

const options = {
  swaggerDefinition: {
    // swagger: "2.0",
    info: {
      title: "Demo project",
      version: "2.0.0",
      description: "demo project ",
    },
  },
  apis: ["./swagger/*.yaml"],
};
const specs = swaggerJSDoc(options);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

// app.get("/", function (req, res) => {
//   res.send("Hello World!");
// });

app.listen(3000, function () {
  console.log("Example app listening on port 3000");
});
