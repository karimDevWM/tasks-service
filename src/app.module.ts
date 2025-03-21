import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './typeorm/entities/Task';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      username: 'root',
      password: 'example',
      port: 3306,
      database: 'nestjsnatsauth_db',
      entities: [Task],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
