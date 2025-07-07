import { type Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BotMessageSquare, DatabaseZap, TestTube2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Use Cases | Notte',
  description: 'Discover how Notte powers your automated tasks for automation, data extraction, and testing.',
};

const useCases = [
  {
    icon: BotMessageSquare,
    title: 'Automation',
    description: 'Automate tedious but critical browser-based tasks, freeing up valuable time and resources for your team.',
    href: '/lp/automation',
    bgColor: 'bg-blue-900/20',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    hoverBorderColor: 'hover:border-blue-500/60',
  },
  {
    icon: DatabaseZap,
    title: 'Data Extraction',
    description: 'Build reliable web scraping and intelligence gathering agents that can handle complex, dynamic websites at scale.',
    href: '/lp/data-extraction',
    bgColor: 'bg-green-900/20',
    textColor: 'text-green-400',
    borderColor: 'border-green-500/30',
    hoverBorderColor: 'hover:border-green-500/60',
  },
  {
    icon: TestTube2,
    title: 'Testing',
    description: 'Perform scalable and automated end-to-end testing across any web application to ensure quality and reliability.',
    href: '/lp/testing',
    bgColor: 'bg-purple-900/20',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    hoverBorderColor: 'hover:border-purple-500/60',
  },
];

export default function UseCasesPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <div className="relative isolate overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
              Automate Browser-Based Workflows
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover how Notte provides the full-stack framework to power your most critical automated tasks.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {useCases.map((useCase) => (
                <Link
                  href={useCase.href}
                  key={useCase.title}
                  className={`group flex flex-col rounded-2xl bg-gray-900/50 p-8 ring-1 ring-inset ${useCase.borderColor} ${useCase.hoverBorderColor} transition-all duration-300 ease-in-out hover:ring-2 hover:-translate-y-1 backdrop-blur-sm`}
                >
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                        <div className={`flex h-12 w-12 flex-none items-center justify-center rounded-lg ${useCase.bgColor}`}>
                            <useCase.icon className={`h-6 w-6 ${useCase.textColor}`} aria-hidden="true" />
                        </div>
                        <span className="text-2xl">{useCase.title}</span>
                    </dt>
                    <dd className="mt-6 flex flex-auto flex-col text-base leading-7 text-gray-400">
                        <p className="flex-auto">{useCase.description}</p>
                        <p className="mt-6 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                            Learn more <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                        </p>
                    </dd>
                </Link>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}