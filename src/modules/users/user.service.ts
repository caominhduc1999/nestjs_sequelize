import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/modules/users/user.model';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User) private userModel: typeof User,
        private sequelize: Sequelize
    ) {}

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    findOne(id: string): Promise<User> {
        console.log(id);
        
        return this.userModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
    }

    async create() {
        try {
          await this.sequelize.transaction(async t => {
            const transactionHost = { transaction: t };
      
            const newUser = await this.userModel.create(
                { firstName: 'Abraham', lastName: 'Lincoln' },
                transactionHost,
            );

            return newUser;
          });
        } catch (err) {
            console.log(err);
            
          // Transaction has been rolled back
          // err is whatever rejected the promise chain returned to the transaction callback
        }
    }
}