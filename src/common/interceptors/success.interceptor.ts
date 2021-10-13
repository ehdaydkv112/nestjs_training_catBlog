/* eslint-disable prettier/prettier */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 이 사이에 라우터가 발동됨
    return next
      .handle()
      .pipe(map((data) => ({
        success: true,
        data,
      })));
  }
}

// map(data)는 컨트롤러에 리턴한 data를 받게된것
