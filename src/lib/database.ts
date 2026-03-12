import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Project } from '@/entities/Project';
import { Skill } from '@/entities/Skill';
import { Message } from '@/entities/Message';
import path from 'path';

const dbPath = process.env.DATABASE_PATH
  ? path.resolve(process.cwd(), process.env.DATABASE_PATH)
  : path.resolve(process.cwd(), 'portfolio.sqlite');

let dataSource: DataSource | null = null;

export async function getDataSource(): Promise<DataSource> {
  if (dataSource && dataSource.isInitialized) {
    return dataSource;
  }

  dataSource = new DataSource({
    type: 'better-sqlite3',
    database: dbPath,
    synchronize: true,
    logging: false,
    entities: [Project, Skill, Message],
  });

  await dataSource.initialize();
  await seedDatabase(dataSource);
  return dataSource;
}

async function seedDatabase(ds: DataSource): Promise<void> {
  const projectRepo = ds.getRepository(Project);
  const skillRepo = ds.getRepository(Skill);

  const projectCount = await projectRepo.count();
  if (projectCount === 0) {
    const projects: Partial<Project>[] = [
      {
        title: 'E-Commerce Platform',
        description:
          'A full-stack e-commerce platform with product management, shopping cart, user authentication, and payment integration. Built with modern web technologies for optimal performance.',
        techStack: 'React,Next.js,TypeScript,Node.js,PostgreSQL,Stripe',
        githubUrl: 'https://github.com/example/ecommerce',
        liveUrl: 'https://ecommerce.example.com',
        imageUrl: null,
        featured: true,
      },
      {
        title: 'Task Management App',
        description:
          'A collaborative task management application with real-time updates, drag-and-drop interface, team collaboration features, and detailed analytics dashboard.',
        techStack: 'React,TypeScript,Socket.io,Express,MongoDB',
        githubUrl: 'https://github.com/example/taskapp',
        liveUrl: 'https://tasks.example.com',
        imageUrl: null,
        featured: true,
      },
      {
        title: 'Weather Dashboard',
        description:
          'A responsive weather dashboard that displays current conditions, 7-day forecasts, and historical data using multiple weather APIs with beautiful data visualizations.',
        techStack: 'Vue.js,TypeScript,D3.js,OpenWeatherAPI',
        githubUrl: 'https://github.com/example/weather',
        liveUrl: 'https://weather.example.com',
        imageUrl: null,
        featured: false,
      },
      {
        title: 'Blog CMS',
        description:
          'A headless content management system for blogs with markdown support, SEO optimization, image management, and a custom rich text editor.',
        techStack: 'Next.js,TypeScript,Prisma,PostgreSQL,AWS S3',
        githubUrl: 'https://github.com/example/blog-cms',
        liveUrl: null,
        imageUrl: null,
        featured: false,
      },
      {
        title: 'Real-time Chat App',
        description:
          'A real-time messaging application with private and group chats, file sharing, emoji reactions, and end-to-end encryption support.',
        techStack: 'React,Node.js,Socket.io,Redis,MongoDB',
        githubUrl: 'https://github.com/example/chat',
        liveUrl: 'https://chat.example.com',
        imageUrl: null,
        featured: true,
      },
      {
        title: 'Portfolio Generator',
        description:
          'A tool that generates beautiful portfolio websites from a simple configuration file. Supports multiple themes and deploys automatically to GitHub Pages.',
        techStack: 'Node.js,TypeScript,Handlebars,GitHub API',
        githubUrl: 'https://github.com/example/portfolio-gen',
        liveUrl: null,
        imageUrl: null,
        featured: false,
      },
    ];

    for (const project of projects) {
      await projectRepo.save(projectRepo.create(project));
    }
  }

  const skillCount = await skillRepo.count();
  if (skillCount === 0) {
    const skills: Partial<Skill>[] = [
      { name: 'React', category: 'Frontend', proficiency: 95 },
      { name: 'Next.js', category: 'Frontend', proficiency: 90 },
      { name: 'TypeScript', category: 'Frontend', proficiency: 88 },
      { name: 'Tailwind CSS', category: 'Frontend', proficiency: 92 },
      { name: 'Vue.js', category: 'Frontend', proficiency: 75 },
      { name: 'Node.js', category: 'Backend', proficiency: 88 },
      { name: 'Express.js', category: 'Backend', proficiency: 85 },
      { name: 'PostgreSQL', category: 'Backend', proficiency: 82 },
      { name: 'MongoDB', category: 'Backend', proficiency: 78 },
      { name: 'Redis', category: 'Backend', proficiency: 70 },
      { name: 'Docker', category: 'Tools', proficiency: 80 },
      { name: 'Git', category: 'Tools', proficiency: 93 },
      { name: 'AWS', category: 'Tools', proficiency: 72 },
      { name: 'GraphQL', category: 'Backend', proficiency: 74 },
      { name: 'Figma', category: 'Tools', proficiency: 68 },
    ];

    for (const skill of skills) {
      await skillRepo.save(skillRepo.create(skill));
    }
  }
}
