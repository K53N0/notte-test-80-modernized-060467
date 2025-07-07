import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Linkedin, Twitter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | Notte Labs',
  description: 'Join Notte Labs and help shape the future of AI agents. We are building the full-stack framework for LLM web agents.',
};

const jobOpenings = [
  {
    title: 'Founding Engineer',
    href: '/careers/founding-engineer',
  },
  {
    title: 'Founding Growth Hacker',
    href: '/careers/founding-growth-hacker',
  },
];

const founders = [
  { name: 'Andrea', href: 'https://www.linkedin.com/in/pinto-andrea/' },
  { name: 'Lucas', href: 'https://www.linkedin.com/in/giordano-lucas/' },
];

export default function CareersPage() {
  return (
    <div className="bg-black text-gray-300 min-h-screen antialiased">
      <div className="relative isolate overflow-hidden">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <header className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Notte Labs
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Notte is building the full-stack framework for LLM web agents. We turn websites into structured, natural language environments that LLMs can understand and act on — fast, reliably, and at scale. Our stack spans browser infra, secure sessions, structured perception, and a hosted agent SDK.
            </p>
          </header>

          <main className="max-w-3xl mx-auto space-y-16">
            <section id="about-team">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                About the team
              </h2>
              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  Notte was founded by Andrea and Lucas in early 2025 and was later joined by two software engineers. We're a small, fast-moving team based between Zürich and SF, backed by great investors and focused on building real, production-grade systems for the agentic internet.
                </p>
                <div className="flex flex-wrap gap-4">
                  {founders.map((founder) => (
                    <a
                      key={founder.name}
                      href={founder.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 hover:bg-gray-800 border border-gray-800 text-gray-300 hover:text-white rounded-lg transition-colors"
                    >
                      <Linkedin size={16} />
                      <span>{founder.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section id="open-positions">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Join our team and help shape the future of AI agents
              </h2>
              <div className="space-y-4">
                {jobOpenings.map((job) => (
                  <Link
                    href={job.href}
                    key={job.title}
                    className="flex justify-between items-center p-5 sm:p-6 bg-gray-900/50 hover:bg-gray-800/70 border border-gray-800 rounded-lg transition-all duration-300 group"
                  >
                    <span className="text-lg sm:text-xl font-medium text-white">{job.title}</span>
                    <ArrowRight className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-transform" size={24} />
                  </Link>
                ))}
              </div>
            </section>
          </main>

          <footer className="max-w-3xl mx-auto mt-20 sm:mt-24 text-center">
            <a
              href="https://x.com/nottecore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
            >
              <Twitter size={18} />
              <span>Follow @nottecore on X</span>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}