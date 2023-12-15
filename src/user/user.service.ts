import { Injectable } from '@nestjs/common';
import { isNotEmpty } from 'class-validator';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const users: User[] = [];

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    const user = new User(users.length + 1, createUserDto);
    users.push(user);
    return user;
  }

  findAll() {
    return {
      total: users.length,
      list: users,
    };
  }

  findOne(id: number) {
    const user = users.find((item) => item.id === id);

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = users.find((item) => item.id === id);

    ['username', 'age', 'sex'].forEach((key) => {
      isNotEmpty(updateUserDto[key]) && (user[key] = updateUserDto[key]);
    });

    return user;
  }

  remove(id: number) {
    const index = users.findIndex((item) => item.id === id);

    users.splice(index, 1);

    return users;
  }
}
