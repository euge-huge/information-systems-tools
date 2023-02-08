import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CarService } from './car.service';
import CarPostDto from './dtos/car.post.dto';
import { Car } from './car.entity';

@ApiTags('car')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @ApiOperation({ summary: 'Получение всех машин' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Car })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @Get()
  get() {
    return this.carService.getAll();
  }

  @ApiOperation({ summary: 'Получение машины' })
  @ApiParam({ name: 'noteId', required: true, description: 'ID машины' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Car })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.carService.getById(id);
  }

  @ApiOperation({ summary: 'Создание машины' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Car })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @Post()
  create(@Body() carPostDto: CarPostDto) {
    return this.carService.createNew(carPostDto);
  }

  @ApiOperation({ summary: 'Удаление машины' })
  @ApiParam({ name: 'id', required: true, description: 'ID машины' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Number })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.carService.deleteById(id);
  }
}
