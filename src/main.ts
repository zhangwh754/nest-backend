import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { validationPipeConfig } from './app/pipe/validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(validationPipeConfig));

  await app.listen(process.env.APP_PORT);
}
bootstrap();
