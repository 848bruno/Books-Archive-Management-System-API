
import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Book } from '../../book/entities/book.entity';

@Entity()
export class BookReview {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  content: string;

  @Column('int')
  rating: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.reviews, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Book, (book) => book.reviews, { onDelete: 'CASCADE' })
  book: Book;
}
