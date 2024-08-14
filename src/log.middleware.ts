import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('LogMiddleware---before2---', req.url);
    next();
    console.log('LogMiddleware---after2---');
  }
}
