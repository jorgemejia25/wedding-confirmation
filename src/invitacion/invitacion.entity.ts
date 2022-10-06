import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invitacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  invitaciones: number;

  @Column({
    default: "Pendiente",
  })
  estado: string;

  @Column({
    default: 0,
  })
  confirmados: number;
}
