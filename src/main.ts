import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/main";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(25565);
}
bootstrap();
