import { Controller, Get, Post, Body, Put, Param } from "@nestjs/common";
import { StudentService } from "../services/students";
import { Student } from "src/models/student";
@Controller()
export class StudentsController {
  constructor(private readonly students: StudentService) {}

  @Get("/students")
  async getHello(): Promise<Array<Student>> {
    return this.students.getAll();
  }
  @Post("/students")
  async save(@Body() student): Promise<Student> {
    return this.students.save(student);
  }
  @Put("/students/:id")
  async update(@Param() params, @Body() student): Promise<Student> {
    return this.students.update(params.id, student);
  }
}
