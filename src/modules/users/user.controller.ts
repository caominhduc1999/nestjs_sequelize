import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Get('create')
    async createUser() {
        return this.userService.create();
    }

    @Get('')
    async findAllUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    async findUser(@Param('id') id: string) {
        return this.userService.findOne(id);
    }
}