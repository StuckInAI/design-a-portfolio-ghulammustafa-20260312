import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4 animate-slide-up">
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Send me a message and I&apos;ll get back to you as soon as
            possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                  Let&apos;s Connect
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I&apos;m currently available for freelance work and full-time
                  opportunities. Whether you have a question, a project idea, or
                  just want to say hi, my inbox is always open!
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: '📧',
                    label: 'Email',
                    value: 'hello@portfolio.dev',
                    href: 'mailto:hello@portfolio.dev',
                  },
                  {
                    icon: '💼',
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/portfolio',
                    href: '#',
                  },
                  {
                    icon: '🐙',
                    label: 'GitHub',
                    value: 'github.com/portfolio',
                    href: '#',
                  },
                  {
                    icon: '🐦',
                    label: 'Twitter',
                    value: '@portfolio_dev',
                    href: '#',
                  },
                ].map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 card-hover group"
                  >
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {contact.label}
                      </div>
                      <div className="font-medium text-slate-700 dark:text-slate-300">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-medium text-green-800 dark:text-green-400">
                    Available for opportunities
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-500">
                    Currently open to new projects and roles
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
