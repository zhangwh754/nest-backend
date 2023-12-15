import { IsEmail, IsOptional, Length } from 'class-validator'

export class CreateUserDto {
  @Length(3, 10)
  @IsOptional()
  name: string

  @IsEmail()
  email: string
}
