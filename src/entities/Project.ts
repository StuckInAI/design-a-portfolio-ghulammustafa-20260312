import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'varchar', length: 500 })
  techStack!: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  githubUrl!: string | null;

  @Column({ type: 'varchar', length: 500, nullable: true })
  liveUrl!: string | null;

  @Column({ type: 'varchar', length: 500, nullable: true })
  imageUrl!: string | null;

  @Column({ type: 'boolean', default: false })
  featured!: boolean;

  @CreateDateColumn()
  createdAt!: Date;
}
