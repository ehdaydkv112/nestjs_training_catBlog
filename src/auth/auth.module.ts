/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CatsModule } from 'src/cats/cats.module';
// import { CatsRepository } from 'src/cats/cats.repository';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
  PassportModule.register({ defaultStrategy: 'jwt', session: true }),
  
  JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '1y'},
  }),

  forwardRef(() => CatsModule), // 순환참조 해결
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
