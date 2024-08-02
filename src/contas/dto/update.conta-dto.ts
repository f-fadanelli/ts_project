import { IsOptional } from 'class-validator';
import { ApiPropertyOptional} from '@nestjs/swagger';

export class UpdateContaDto {
  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
  })
  numero: number;

  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: 'This is an optional property',
  })
  titular: string;

  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
  })
  saldo: number;

  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
  })
  limite: number;
}