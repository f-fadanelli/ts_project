import { IsNotEmpty } from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';

export class CreateContaDto {
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  numero: number;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  titular: string;

  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  saldo: number;

  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  limite: number;
}