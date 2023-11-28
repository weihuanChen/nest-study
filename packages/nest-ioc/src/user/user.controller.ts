import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: CreateUserDto,
  })
  @ApiOperation({
    summary: '新增用户',
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('ENV:URl', this.configService.get<string>('database.url'));

    return this.userService.create(createUserDto);
  }

  @ApiOperation({
    summary: '获取用户',
  })
  // GET /user
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  // GET /user/2
  @ApiOperation({
    summary: '根据ID获取用户',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  // GET /user/123
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
