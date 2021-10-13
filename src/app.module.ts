import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    CatsModule,
    AuthModule,
  ],
  controllers: [AppController], // 소비자
  providers: [AppService], // prociders-공급자, AppService-공급된 제품들
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    mongoose.set('debug', this.isDev); // 몽구스 쿼리를 찍음, 프로덕트는 false로 쓰면 됨
  }
}

// admin
// ketotable1234
// mongodb+srv://admin:<password>@nestcluster.cz0iz.mongodb.net/test
