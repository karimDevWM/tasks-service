import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTaskDto } from './dtos/createTask.dto';
import { TaskService } from './task.service';

@Controller()
export class TaskMicroserviceController {
  constructor(private taskService: TaskService) {}
  @MessagePattern({ cmd: 'createTask' })
  createTask(@Payload() createTaskDto: CreateTaskDto) {
    console.log(
      'received creation task request into task microservice :',
      createTaskDto,
    );
    return this.taskService.createTask(createTaskDto);
  }
}
