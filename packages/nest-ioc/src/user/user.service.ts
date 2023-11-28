import { SystemService } from './../shared/system.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly systemService: SystemService) {}
  create(createUserDto: CreateUserDto) {
    // 追加调用模块
    console.log(this.systemService.getEnv());
    // throw new HttpException('自定义异常', HttpStatus.CONFLICT)  // 抛出异常
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
