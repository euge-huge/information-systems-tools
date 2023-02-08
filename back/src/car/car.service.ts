import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Car } from './car.entity';
import CarPostDto from './dtos/car.post.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>
  ) {}

  public async getAll(): Promise<Car[]> {
    return await this.carRepository.find({});
  }

  public async getById(id: number): Promise<Car> {
    return await this.carRepository.findOne({ where: { id } });
  }

  public async createNew(carPostDto: CarPostDto): Promise<Car> {
    const newCar = new Car();

    newCar.name = carPostDto.name;
    newCar.year = carPostDto.year;
    newCar.color = carPostDto.color;
    newCar.maxSpeed = carPostDto.maxSpeed;

    return await this.carRepository.save(newCar);
  }

  public async deleteById(id: number): Promise<number> {
    const deleteResult = await this.carRepository.delete({ id });

    return deleteResult.affected;
  }
}
