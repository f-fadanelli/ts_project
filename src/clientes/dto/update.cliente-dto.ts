import { IsOptional } from 'class-validator';
import { ApiPropertyOptional} from '@nestjs/swagger';

export class UpdateClienteDto {
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: 'This is an optional property',
  })
  nome: String;

  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: 'This is an optional property',
  })
  sobrenome: string;

  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: 'This is an optional property',
  })
  cpf: String;
}