import { ApiProperty } from '@nestjs/swagger';

export class CarPostDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  color?: string;

  @ApiProperty()
  maxSpeed?: number;
}

export default CarPostDto;
