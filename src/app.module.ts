import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/users/user.module';
import { User } from './modules/users/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      models: [User],
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
