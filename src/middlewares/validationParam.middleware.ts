import { plainToClass } from "class-transformer";
// import { ClassType } from 'class-transformer/ClassTransformer'
import { validate, ValidationError } from "class-validator";
import { RequestHandler } from "express";
// import HttpException from '../exceptions/HttpException'
// import common from '../utils/common'
function validationParamMiddleware<T>(
  type: any,
  skipMissingProperties = false
): RequestHandler {
  return (req, res, next) => {
    const dtoObj = plainToClass(type, req.body);
    validate(plainToClass(type, req.params), { skipMissingProperties }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors
            .map((error: ValidationError) => Object.values(error.constraints))
            .join(", ");
          next(message);
        } else {
          next();
        }
      }
    );
  };
}
export default validationParamMiddleware;
