import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    components: [TodoService],
    controllers: [TodoController],
})

export class TodoModule {}