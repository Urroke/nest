import { Module } from "@nestjs/common";
import { AppController } from "../controllers/main";
import { AppService } from "../services/main";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "src/models/student";
import { Record } from "src/models/record";
import { StudentModule } from "./student";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "gradebooks",
      entities: [Student, Record],
      synchronize: true
    }),
    StudentModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
