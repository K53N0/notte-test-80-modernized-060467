import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tutorials - Notte',
  description: 'Learn how to build and run web agents with Notte. From quickstarts to deep dives into how our technology works.',
};

const tutorials = [
  {
    title: 'Quickstart with Notte',
    description: 'Run your first Notte agent in under five minutes and watch it browse the web using natural language.',
    href: '/tutorial/quickstart',
  },
  {
    title: 'How Notte Works',
    description: 'Understand how agents think, observe, and act — and how the perception layer helps LLMs interact with real web pages.',
    href: '/tutorial/how-it-works',
  },
];

export default function TutorialsPage() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto max-w-4xl px-4 py-20 sm:py-24 lg:py-32">
        <header className="text-center mb-16">
          <BookOpen className="mx-auto h-12 w-12 text-blue-500" />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Notte Tutorials
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Learn how to build and run web agents with Notte. These guides provide everything you need to get started and master the Notte framework.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.href}
              href={tutorial.href}
              className="group flex flex-col justify-between rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:-translate-y-1"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{tutorial.title}</h2>
                <p className="mt-3 text-base text-gray-600 dark:text-gray-400">{tutorial.description}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                <span>Start Learning</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}