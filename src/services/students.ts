import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Student } from "src/models/student";
import { InjectRepository } from "@nestjs/typeorm";
import { Record } from "src/models/record";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private students: Repository<Student>,
    @InjectRepository(Record) private records: Repository<Record>
  ) {}

  getAll(): Promise<Array<Student>> {
    return this.students.find({ relations: ["records"] });
  }
  save(student: Student): Promise<Student> {
    student.records = new Array<Record>();
    return this.students.save(student);
  }

  async update(id: number, student: Student): Promise<Student> {
    let entity: Student = await this.students.findOne(id);
    entity = { ...entity, ...student };
    return this.students.save(entity);
  }
}
