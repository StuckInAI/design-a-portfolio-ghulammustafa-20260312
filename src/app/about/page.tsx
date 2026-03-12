import SkillBadge from '@/components/SkillBadge';
import Link from 'next/link';

interface SkillData {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}

interface GroupedSkills {
  [category: string]: SkillData[];
}

async function getSkills(): Promise<GroupedSkills> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      `http://localhost:${process.env.PORT || 3000}`;
    const res = await fetch(`${baseUrl}/api/skills`, { cache: 'no-store' });
    if (!res.ok) return {};
    const data = await res.json();
    return data.skills || {};
  } catch {
    return {};
  }
}

export default async function AboutPage() {
  const skillsByCategory = await getSkills();
  const categories = Object.keys(skillsByCategory);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                About{' '}
                <span className="gradient-text">Me</span>
              </h1>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  Hi! I&apos;m a passionate Full-Stack Developer with over 5 years
                  of experience crafting digital experiences that are both
                  beautiful and functional.
                </p>
                <p>
                  I specialize in building scalable web applications using modern
                  technologies. My journey started with a curiosity about how
                  things work on the internet, and it has evolved into a career
                  I&apos;m truly passionate about.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through blog posts and community involvement.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  Contact Me
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Profile Visual */}
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-2xl">
                  <svg
                    className="w-32 h-32 sm:w-40 sm:h-40 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">👋</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
              { value: '10+', label: 'Open Source Contributions' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Skills &{' '}
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Technologies and tools I work with to build amazing products.
            </p>
          </div>

          {categories.length > 0 ? (
            <div className="space-y-10">
              {categories.map((category) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full inline-block"></span>
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillsByCategory[category].map((skill) => (
                      <SkillBadge key={skill.id} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 dark:text-slate-400">
              <p>Skills data loading...</p>
            </div>
          )}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-white dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Work{' '}
              <span className="gradient-text">Experience</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-8">
              {[
                {
                  year: '2022 - Present',
                  title: 'Senior Full-Stack Developer',
                  company: 'Tech Innovations Inc.',
                  description:
                    'Lead development of microservices architecture, mentored junior developers, and improved system performance by 40%.',
                },
                {
                  year: '2020 - 2022',
                  title: 'Full-Stack Developer',
                  company: 'Digital Agency Pro',
                  description:
                    'Built and maintained multiple client web applications, implemented CI/CD pipelines, and collaborated with design teams.',
                },
                {
                  year: '2018 - 2020',
                  title: 'Frontend Developer',
                  company: 'Startup XYZ',
                  description:
                    'Developed responsive React applications, optimized web performance, and integrated REST APIs.',
                },
              ].map((exp, index) => (
                <div key={index} className="flex gap-6 pl-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-md">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 flex-1 card-hover">
                    <div className="flex flex-wrap gap-2 items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
