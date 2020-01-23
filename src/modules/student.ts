import { Module } from "@nestjs/common";
import { StudentsController } from "../controllers/students";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "src/models/student";
import { Record } from "src/models/record";
import { StudentService } from "src/services/students";
@Module({
  imports: [TypeOrmModule.forFeature([Student, Record])],
  controllers: [StudentsController],
  providers: [StudentService]
})
export class StudentModule {}
