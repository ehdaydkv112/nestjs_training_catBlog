/* eslint-disable prettier/prettier */
import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

// Cat이란 클래스에서 email과 name만 가져옴
export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '3208199',
    description: 'id',
    required: true,
  })
  id: string;
}
