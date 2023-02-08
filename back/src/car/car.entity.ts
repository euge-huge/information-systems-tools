import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('car')
export class Car {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({
    nullable: false,
    default: ''
  })
  name: string;

  @ApiProperty()
  @Column({
    nullable: false,
    type: 'int'
  })
  year: number;

  @ApiProperty()
  @Column({
    nullable: true
  })
  color: string;

  @ApiProperty()
  @Column({
    name: 'max_speed',
    nullable: true,
    type: 'int'
  })
  maxSpeed: number;
}
