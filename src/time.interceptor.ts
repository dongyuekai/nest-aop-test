import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

// 拦截器 可以在目标Controller方法前后加入一些逻辑
@Injectable()
export class TimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('dyk---', context.getClass(), context.getHandler());
    const startTime = Date.now();
    return next.handle().pipe(
      tap(() => {
        console.log('time---', Date.now() - startTime);
      }),
    );
  }
}
