import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/typeorm/entities/Task';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dtos/createTask.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async createTask({ name, userId }: CreateTaskDto) {
    const existingTask = await this.taskRepository.findOne({
      where: { name, userId },
    });

    if (existingTask) {
      return `Task ${existingTask.name} already exists for this user`;
    }

    const task = this.taskRepository.create({ name, userId });
    return await this.taskRepository.save(task);
  }
}
