import { NextRequest, NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { Project } from '@/entities/Project';

export async function GET(request: NextRequest) {
  try {
    const ds = await getDataSource();
    const projectRepo = ds.getRepository(Project);

    const { searchParams } = new URL(request.url);
    const featuredParam = searchParams.get('featured');

    let projects: Project[];

    if (featuredParam === 'true') {
      projects = await projectRepo.find({
        where: { featured: true },
        order: { createdAt: 'DESC' },
      });
    } else {
      projects = await projectRepo.find({
        order: { createdAt: 'DESC' },
      });
    }

    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}
