import { IsNotEmpty } from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';

export class CreateClienteDto {
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  nome: String;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  sobrenome: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  cpf: String;
}