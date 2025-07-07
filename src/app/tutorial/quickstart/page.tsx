import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quickstart Tutorial | Notte',
  description: 'Run your first Notte agent in under five minutes and watch it browse the web using natural language.',
};

export default function QuickstartPage() {
  const pythonCode = `from notte_sdk import NotteClient

# Initialize the client with your API key
notte = NotteClient(api_key="YOUR_API_KEY_HERE")

# Define your task
response = notte.agents.run(
    task="Find the latest job openings on notte.cc",
    # Optionally specify a starting URL
    # url="https://www.notte.cc/careers"
)

# Print the agent's final answer
print(response.answer)`;

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <p className="text-base font-semibold text-indigo-400 tracking-wide uppercase">Tutorial</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Quickstart with Notte
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400">
            Run your first Notte agent in under five minutes and watch it browse the web using natural language.
          </p>
        </div>

        <div className="space-y-12">
          {/* Step 1: Installation */}
          <section>
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-500 h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-indigo-500/10">
                <span className="text-lg font-bold">1</span>
              </div>
              <h2 className="ml-4 text-2xl font-bold">Install the SDK</h2>
            </div>
            <div className="mt-4 pl-14 border-l border-gray-800 ml-5">
              <p className="text-gray-300 text-lg leading-relaxed">
                First, you need to install the Notte Python SDK using pip. Open your terminal and run the following command:
              </p>
              <pre className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 my-4 overflow-x-auto">
                <code className="text-sm font-mono text-gray-300">pip install notte-sdk</code>
              </pre>
            </div>
          </section>

          {/* Step 2: Get API Key */}
          <section>
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-500 h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-indigo-500/10">
                <span className="text-lg font-bold">2</span>
              </div>
              <h2 className="ml-4 text-2xl font-bold">Get your API Key</h2>
            </div>
            <div className="mt-4 pl-14 border-l border-gray-800 ml-5">
              <p className="text-gray-300 text-lg leading-relaxed">
                To use the Notte API, you&apos;ll need an API key. You can get one for free from the Notte Console.
              </p>
              <div className="mt-6">
                <Link
                  href="https://console.notte.cc/apikeys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-indigo-500 transition-colors"
                >
                  Get API Key
                  <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* Step 3: Run your Agent */}
          <section>
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-500 h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-indigo-500/10">
                <span className="text-lg font-bold">3</span>
              </div>
              <h2 className="ml-4 text-2xl font-bold">Run your first Agent</h2>
            </div>
            <div className="mt-4 pl-14 border-l border-gray-800 ml-5">
              <p className="text-gray-300 text-lg leading-relaxed">
                Now you&apos;re ready to run your first agent. Create a Python file (e.g., `run_agent.py`), paste the code below, and replace <code className="bg-gray-700 text-indigo-300 px-1 py-0.5 rounded-sm text-base">YOUR_API_KEY_HERE</code> with the key you just created.
              </p>
               <pre className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 my-4 overflow-x-auto">
                <code className="text-sm font-mono text-gray-300 whitespace-pre-wrap">{pythonCode}</code>
              </pre>
              <p className="text-gray-300 text-lg leading-relaxed">
                Run the script from your terminal:
              </p>
              <pre className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 my-4 overflow-x-auto">
                <code className="text-sm font-mono text-gray-300">python run_agent.py</code>
              </pre>
              <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                That&apos;s it! The agent will now execute the task of finding job openings on the Notte website and print the result.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <div className="border-t border-gray-800 pt-16">
            <h2 className="text-3xl font-bold text-center">Next Steps</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400 text-center">
              You&apos;ve successfully run your first agent. Now, explore how Notte&apos;s perception layer works to understand how it all comes together.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/tutorial/how-it-works"
                className="inline-flex items-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-indigo-500 transition-colors"
              >
                How Notte Works
                <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}