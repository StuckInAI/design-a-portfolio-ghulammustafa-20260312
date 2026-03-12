import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6 animate-slide-up">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-slate-100 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Hi, I&apos;m{' '}
          <span className="gradient-text">Alex</span>
        </h1>

        {/* Title */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Full-Stack Developer &{' '}
          <span className="text-purple-600 dark:text-purple-400">Problem Solver</span>
        </div>

        {/* Description */}
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
          I craft exceptional digital experiences using modern web technologies.
          Passionate about clean code, beautiful design, and scalable architecture.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 text-lg"
          >
            View My Work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-4 px-8 rounded-full hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-lg"
          >
            Contact Me
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">Technologies I work with</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-full shadow-sm border border-slate-200 dark:border-slate-700 font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
