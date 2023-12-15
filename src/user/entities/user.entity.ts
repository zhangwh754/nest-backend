import { CreateUserDto } from '../dto/create-user.dto'

export class User {
  id: number
  username: string
  age: number
  sex: number

  constructor(id: number, createUserDto: CreateUserDto) {
    this.id = id
    this.username = createUserDto.username
    this.age = createUserDto.age
    this.sex = createUserDto.sex
  }
}
