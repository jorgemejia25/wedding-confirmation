import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Invitacion } from "./invitacion.entity";
import { InvitacionDto } from "./invitacion.dto";

@Injectable()
export class InvitacionService {
  constructor(
    @InjectRepository(Invitacion)
    private invitacionRepository: Repository<Invitacion>
  ) {}

  async findAll(): Promise<Invitacion[]> {
    return this.invitacionRepository.find({
      order: {
        id: "ASC",
      },
    });
  }

  async findOne(id: number): Promise<Invitacion> {
    return this.invitacionRepository.findOneBy({ id });
  }

  async create(invitacion: InvitacionDto): Promise<Invitacion> {
    return this.invitacionRepository.save(invitacion);
  }

  async update(
    id: number,
    invitacion: Partial<Invitacion>
  ): Promise<Invitacion> {
    const invitacionToUpdate = await this.invitacionRepository.findOneBy({
      id,
    });

    Object.assign(invitacionToUpdate, invitacion);

    return this.invitacionRepository.save(invitacionToUpdate);
  }

  async delete(id: number): Promise<Invitacion> {
    const invitacionToDelete = await this.invitacionRepository.findOneBy({
      id,
    });

    return this.invitacionRepository.remove(invitacionToDelete);
  }

  async confirmar(id: number, confirmados: number): Promise<Invitacion> {
    const invitacion = await this.invitacionRepository.findOneBy({ id });

    invitacion.estado = "Confirmado";
    invitacion.confirmados = confirmados;

    return this.invitacionRepository.save(invitacion);
  }

  async rechazar(id: number): Promise<Invitacion> {
    const invitacion = await this.invitacionRepository.findOneBy({ id });

    invitacion.estado = "Rechazado";

    return this.invitacionRepository.save(invitacion);
  }
}
