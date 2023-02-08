import { ApiProperty } from '@nestjs/swagger';

export class CarPuttDto {
  @ApiProperty({ required: false, default: 'Назавние машины' })
  name: string;

  @ApiProperty({ required: false, default: 2023 })
  year: number;

  @ApiProperty({ required: false, default: 'red' })
  color?: string;

  @ApiProperty({ required: false, default: 180 })
  maxSpeed?: number;
}

export default CarPuttDto;
