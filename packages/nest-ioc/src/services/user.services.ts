import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { MongoRepository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/entites/user.mongo.entity';
// service层
@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: MongoRepository<User>,
  ) {}

  async create(user) {
    return this.userRepository.save(user);
  }

  async findAll({
    pageSize,
    page,
  }: PaginationParams2Dto): Promise<{ data: User[]; count: number }> {
    const [data, count] = await this.userRepository.findAndCount({
      order: { createdAt: 'DESC' },
      skip: (page - 1) * pageSize,
      take: pageSize * 1,
      cache: true,
    });

    return {
      data,
      count,
    };
  }

  async findOne(id: string) {
    return await this.userRepository.findOneBy(id);
  }

  async update(id: string, user: CreateUserDto) {
    return await this.userRepository.update(id, user);
  }

  async remove(id: string): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
