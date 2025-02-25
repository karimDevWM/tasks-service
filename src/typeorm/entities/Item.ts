import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Task } from './Task';

@Entity({ name: 'items' })
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemName: string;

  // @ManyToOne(() => Task, (task) => task.items)
  // taskId: Task;
}
