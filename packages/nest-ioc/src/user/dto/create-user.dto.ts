import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: '13265255252' })
  @Matches(/^1\d{10}$/g, { message: '请输入手机号' })
  phoneNumer: string;

  @ApiProperty({ example: '123456' })
  @IsNotEmpty()
  @Length(6, 10)
  passwWord: string;

  @ApiProperty({ example: 'aa@qq.com' })
  @IsEmail()
  email: string;
}
