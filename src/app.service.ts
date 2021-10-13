import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// 컨트롤러가 return 값을 받음
// 모듈로 들어가게 되고,
// 모듈이 nestFactiory에 들어가게된다.

// Appservcive는 공급자라서
// Injectable같은 의존성주입이 가능하다.
