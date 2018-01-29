import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';

import { CreateTodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
    @Get()
    findAll( @Res() res) {
        res.status(HttpStatus.OK).json([]);
    }

    @Post()
    async create( @Res() res, @Body() createTodoDto: CreateTodoDto) {
        res.status(HttpStatus.CREATED).send();
    }
}   