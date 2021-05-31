import { RequestHandler } from "express";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
// import { sanitize, Trim } from "class-sanitizer";
// import HttpException from "../exception/HttpException";

function dtoValidationMiddleware(
  type: any,
  skipMissingProperties = false
): RequestHandler {
  return (req, res, next) => {
    const dtoObj = plainToClass(type, req.body);
    validate(dtoObj, { skipMissingProperties }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const dtoErrors = errors
            .map((error: ValidationError) =>
              (Object as any).values(error.constraints)
            )
            .join(", ");
          next(dtoErrors);
        } else {
          req.body = dtoObj;
          next();
        }
      }
    );
  };

  // return (req, res, next) => {
  //   validate(plainToClass(type, req.body), { skipMissingProperties }).then(
  //     (errors: ValidationError[]) => {
  //       if (errors.length > 0) {
  //         //   const message = arrayFilter(errors, []);
  //         next(message);
  //       } else {
  //         next();
  //       }
  //     }
  //   );
  // };
}

export default dtoValidationMiddleware;
