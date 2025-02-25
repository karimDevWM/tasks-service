import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { Item } from './Item';

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' }) // Auto-inserted on creation
  creationDate: Date;

  @Column({ default: false })
  isCompleted: boolean;

  @Column({ type: 'timestamp', nullable: true })
  completionDate: Date | null;

  @Column()
  userId: string;

  // @OneToMany(() => Item, (item) => item.taskId)
  // items: Item[];
}
