import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('before---', req.url);
    next();
    console.log('after---');
  });
  await app.listen(3000);
}
bootstrap();
