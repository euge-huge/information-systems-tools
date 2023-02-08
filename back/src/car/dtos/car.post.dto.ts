import { ApiProperty } from '@nestjs/swagger';

export class CarPostDto {
  @ApiProperty({ default: 'Назавние машины' })
  name: string;

  @ApiProperty({ default: 2023 })
  year: number;

  @ApiProperty({ required: false, default: 'red' })
  color?: string;

  @ApiProperty({ required: false, default: 180 })
  maxSpeed?: number;
}

export default CarPostDto;
