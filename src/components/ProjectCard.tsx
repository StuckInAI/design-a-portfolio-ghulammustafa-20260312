import { Project } from '@/entities/Project';

interface ProjectCardProps {
  project: Project;
}

const TECH_COLORS: { [key: string]: string } = {
  React: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  'Next.js': 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
  TypeScript: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
  'Node.js': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  PostgreSQL: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
  MongoDB: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200',
  Redis: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  Docker: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  'Vue.js': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  'D3.js': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  Stripe: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'AWS S3': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  Prisma: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
  'Socket.io': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  Express: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  GraphQL: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
};

function getTechColor(tech: string): string {
  return (
    TECH_COLORS[tech] ||
    'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const techList = project.techStack.split(',').map((t) => t.trim()).filter(Boolean);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md card-hover border border-slate-100 dark:border-slate-700 flex flex-col">
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-white text-center">
            <svg
              className="w-16 h-16 mx-auto mb-2 opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span className="text-sm font-medium opacity-80">Project</span>
          </div>
        )}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <span>⭐</span> Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {techList.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
          {techList.length > 4 && (
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400">
              +{techList.length - 4} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <span className="text-sm text-slate-400 dark:text-slate-500 italic">
              Links coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
