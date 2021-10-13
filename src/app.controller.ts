import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// Appcontroller 소비자
// provider (공급자) : 에게 여러 제품 (AppService) 을 받아서 사용함
//
