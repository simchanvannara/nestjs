import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhotoModule } from './photo/photo.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule, TodoModule],
})
export class ApplicationModule {}