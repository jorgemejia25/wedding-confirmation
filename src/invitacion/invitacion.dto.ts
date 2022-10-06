import { IsNumber, IsOptional } from "class-validator";
import { IsString, MaxLength } from "class-validator";

export class InvitacionDto {
  @IsString()
  nombre: string;

  @IsNumber()
  invitaciones: number;

  @IsOptional()
  @IsString()
  estado: string;

  @IsOptional()
  @IsNumber()
  confirmados: number;
}
