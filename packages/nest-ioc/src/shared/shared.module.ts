import { Module } from '@nestjs/common';
import { SharedController } from './shared.controller';
//import { SystemService } from './system.service';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './configs/module-options';
import { DatabaseProviders } from './database/database.providers';
@Module({
  controllers: [SharedController],
  imports: [ConfigModule.forRoot(configModuleOptions)], //注入
  //exports: [SystemService, ConfigModule],
  //providers: [SystemService],
  exports: [...DatabaseProviders],
  providers: [...DatabaseProviders],
})
export class SharedModule {}
