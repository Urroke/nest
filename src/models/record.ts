import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToOne
} from "typeorm";
import { RecordType } from "./enums/record-type";
import { Student } from "./student";

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public subject: string;
  @Column()
  public type: RecordType;
  @Column()
  public teacher: string;
  @ManyToOne(
    type => Student,
    student => student.records
  )
  public student: Student;
  @Column()
  public date: Date;
}
