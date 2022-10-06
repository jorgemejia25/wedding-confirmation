import { Invitacion } from "./invitacion.entity";
import { InvitacionController } from "./invitacion.controller";
import { InvitacionService } from "./invitacion.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Invitacion])],
  providers: [InvitacionService],
  controllers: [InvitacionController],
})
export class InvitacionModule {}
