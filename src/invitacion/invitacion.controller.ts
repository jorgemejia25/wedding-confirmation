import { Controller, Get } from "@nestjs/common";
import {
  Body,
  Delete,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common/decorators";
import { InvitacionService } from "./invitacion.service";
import { InvitacionDto } from "./invitacion.dto";
import { Invitacion } from "./invitacion.entity";

@Controller("invitacion")
export class InvitacionController {
  constructor(private readonly invitacionService: InvitacionService) {}

  @Get()
  findAll() {
    return this.invitacionService.findAll();
  }

  @Get(":id")
  getInvitacion(@Param("id") id: number) {
    return this.invitacionService.findOne(id);
  }

  @Post()
  create(@Body() invitacion: InvitacionDto) {
    return this.invitacionService.create(invitacion);
  }

  @Put(":id")
  update(@Body() invitacion: Partial<Invitacion>, @Param("id") id: number) {
    return this.invitacionService.update(id, invitacion);
  }

  @Get("confirmar/:id")
  confirmar(
    @Param("id") id: number,
    @Query("confirmados") confirmados: number
  ) {
    return this.invitacionService.confirmar(id, confirmados);
  }

  @Get("rechazar/:id")
  rechazar(@Param("id") id: number) {
    return this.invitacionService.rechazar(id);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.invitacionService.delete(id);
  }
}
