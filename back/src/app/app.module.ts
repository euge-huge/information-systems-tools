import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';

import { AppService } from './app.service';
import { CarModule } from '../car/car.module';
import * as process from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST || '127.0.0.1',
      port: +process.env.MYSQL_HOST || 3306,
      username: process.env.MYSQL_USER || 'db',
      password: process.env.MYSQL_USER || 'db',
      database: process.env.MYSQL_DATABASE || 'db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      logging: false,
      synchronize: true
    }),
    CarModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
