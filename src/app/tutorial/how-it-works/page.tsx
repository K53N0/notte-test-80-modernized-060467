import { type Metadata } from "next";
import { BrainCircuit, Eye, Hand } from "lucide-react";

export const metadata: Metadata = {
  title: "How Notte Works | Tutorial",
  description:
    "Understand how Notte agents think, observe, and act — and how our perception layer helps LLMs interact with real web pages.",
};

const HowItWorksPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">Tutorial</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            How Notte Works
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-400">
            Understand how agents think, observe, and act — and how the perception layer helps LLMs interact with real web pages.
          </p>
        </div>

        <div className="space-y-20">
          {/* Introduction Section */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">The Agent's Mind</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto">
              At its core, a Notte agent operates in a continuous loop, much like a human browsing the web. It starts with a goal, observes the environment, thinks about the next step, and then takes action. This cycle repeats until the objective is complete. We've engineered a full-stack framework to make this process reliable, scalable, and accessible through a single API.
            </p>
          </section>

          {/* Core Loop Section */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">The Think-Perceive-Act Loop</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1: Think */}
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:scale-105">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                    <BrainCircuit className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg leading-6 font-medium">1. Think & Plan</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    The agent receives a high-level goal, or <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded">task</code>. Using an LLM, it reasons and creates a step-by-step plan to achieve it.
                  </p>
                </div>
              </div>
              {/* Step 2: Perceive */}
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:scale-105">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                    <Eye className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg leading-6 font-medium">2. Perceive & Understand</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Our perception layer converts complex HTML into clean, structured data, highlighting interactive elements for the LLM.
                  </p>
                </div>
              </div>
              {/* Step 3: Act */}
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:scale-105">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                    <Hand className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg leading-6 font-medium">3. Act & Execute</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Based on its plan, the agent chooses an action like <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded">click()</code>. Notte executes it in a secure browser session. The loop then repeats.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Deep Dive: Perception Layer */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Deep Dive: The Perception Layer</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              The magic behind Notte's reliability is our proprietary perception layer. Raw HTML is a terrible input for LLMs; it's verbose, complex, and lacks semantic context. Our system translates this chaos into clarity.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">From Raw HTML...</h3>
                <pre className="bg-gray-100 dark:bg-gray-800 text-sm p-4 rounded-md overflow-x-auto">
                  <code className="language-html text-gray-500 dark:text-gray-400">
{`<div>
  <a href="/careers" class="css-1a2b3c">
    <span class="css-4d5e6f">
      Jobs
    </span>
  </a>
</div>`}
                  </code>
                </pre>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">...To Structured Insight</h3>
                <pre className="bg-gray-100 dark:bg-gray-800 text-sm p-4 rounded-md overflow-x-auto">
                  <code className="language-json text-green-600 dark:text-green-400">
{`{
  "element_id": "12",
  "type": "link",
  "label": "Jobs",
  "action": "click(12)"
}`}
                  </code>
                </pre>
              </div>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              This structured output gives the LLM exactly what it needs: a list of interactive elements, their labels, and how to interact with them. This dramatically improves the agent's ability to navigate and understand any website.
            </p>
          </section>

          {/* The Notte Stack */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">The Full-Stack Framework</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center max-w-3xl mx-auto">
              This powerful agentic loop is built on a robust platform designed for web automation at scale. We handle the infrastructure so you can focus on your goals.
            </p>
            <div className="space-y-4">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold">Browser Sessions</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Headless browsers without the headache. We manage a fleet of secure, scalable browser instances that your agent can control instantly. No need to worry about infrastructure, proxies, or fingerprints.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold">Agent Ecosystem</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Agents deserve the right tooling, all in one place. Notte provides a suite of services including a secure <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded">Vault</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded">Persona</code> management, and integrated <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded">Payments</code> and <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded">Storage</code>.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold">One Simple API</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  All this complexity is abstracted away behind a single, elegant API call. Give the agent a goal, and we handle the rest, from planning and perception to browser automation and final output.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HowItWorksPage;