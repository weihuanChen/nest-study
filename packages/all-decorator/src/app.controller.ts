import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaFilter } from './aaa.filter';

@Controller()
export class AppController {
  // 构造器注入
  constructor(private readonly appService: AppService) {}
  // 属性注入
  // @Optional() //可选注入
  // @Inject(AppService)
  // private readonly appService:AppService

  @Get()
  @UseFilters(AaaFilter)
  getHello(): string {
    // return this.appService.getHello();
    throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
  }
}
