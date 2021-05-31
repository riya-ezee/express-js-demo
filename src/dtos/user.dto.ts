import {
  IsEmail,
  IsString,
  Length,
  MinLength,
  IsDefined,
  IsNotEmpty,
  IsNumberString,
} from "class-validator";

export class UserDto {
  @IsString()
  @MinLength(5, { message: "name should be minimum of 5 characters" })
  public name?: string;
}

export class UpdateUserParamDto {
  @IsDefined({ message: "ID_REQUIRED" })
  @IsNotEmpty({ message: "ID_NOT_EMPTY" })
  @IsNumberString({}, { message: "ID_MUST_INTEGER" })
  public id: number;
}

export class UpdateUserDto {
  @IsString()
  @MinLength(3, { message: "name should be minimum of 5 characters" })
  public name?: string;
}
