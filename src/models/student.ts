import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne
} from "typeorm";
import { Record } from "./record";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public firstname: string;
  @Column()
  public lastname: string;
  @Column()
  public patronymic: string;
  @Column()
  public group: string;
  @OneToMany(
    type => Record,
    record => record.student,
    {
      cascade: true
    }
  )
  public records: Array<Record>;
}
