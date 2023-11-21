import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/modules/users/user.model";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [SequelizeModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
    // exports: [SequelizeModule]
})
export class UserModule {

}