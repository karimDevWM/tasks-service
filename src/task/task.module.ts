import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { Task } from 'src/typeorm/entities/Task';
import { TaskMicroserviceController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), NatsClientModule],
  controllers: [TaskMicroserviceController],
  providers: [TaskService],
})
export class TaskModule {}
