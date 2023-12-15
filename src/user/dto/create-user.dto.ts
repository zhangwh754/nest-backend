import { IsEnum, IsNumber, Length } from 'class-validator'

export enum Sex {
  male = 0,
  female,
  unknown = 99,
}

export class CreateUserDto {
  @Length(3, 10)
  username: string

  @IsNumber()
  age: number

  @IsEnum(Sex)
  sex: Sex
}
