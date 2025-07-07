import Link from 'next/link';
import { ArrowRight, CheckCircle, Code, Cpu, Database, DollarSign, FileText, GitBranch, HardDrive, Shield, TestTube, Zap } from 'lucide-react';

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-gray-900/50 border border-gray-700 rounded-lg p-6 ${className}`}>
    {children}
  </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="flex flex-col items-start space-y-4">
    <div className="bg-gray-800 p-3 rounded-lg">{icon}</div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </Card>
);

const PricingCard = ({ title, price, description, buttonText, isFeatured = false }: { title: string; price: string; description: string; buttonText: string; isFeatured?: boolean; }) => (
  <Card className={`flex flex-col ${isFeatured ? 'border-purple-500' : 'border-gray-700'}`}>
    <h3 className="text-lg font-semibold text-purple-400">{title}</h3>
    <p className="mt-2 text-3xl font-bold text-white">{price}</p>
    <p className="mt-4 text-gray-400 flex-grow">{description}</p>
    <button className={`mt-6 w-full py-2 px-4 rounded-md font-semibold ${isFeatured ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
      {buttonText}
    </button>
  </Card>
);

const BenchmarkBar = ({ name, percentage, color }: { name: string; percentage: number; color: string }) => (
  <div className="w-full">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-300">{name}</span>
      <span className="text-sm font-medium text-gray-300">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div className={`${color} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <main className="container mx-auto px-4">

        {/* Introduction Section */}
        <section className="text-center py-24 sm:py-32">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
            Rapidly build reliable web agents
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
            Notte provides the full-stack web agents framework you need. Act and scrape on any site. All with a single API.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="https://docs.notte.cc" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
              Read Docs
            </Link>
            <Link href="#pricing" className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 border border-gray-700 transition-colors">
              View Pricing
            </Link>
          </div>
        </section>

        {/* Notte Agent Builder Section */}
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Notte Agent Builder</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Generate code to run web agents with the Notte API.</p>
            </div>
            <Card className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900/70 backdrop-blur-sm">
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-300">API Key</label>
                        <input type="text" value="sk-********************************" readOnly className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md p-2 text-gray-400 cursor-not-allowed"/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-300">Task</label>
                        <input type="text" placeholder="Find the latest job openings on notte.cc" className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md p-2 placeholder-gray-500" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-300">URL</label>
                        <input type="text" placeholder="https://www.notte.cc/" className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md p-2 placeholder-gray-500" />
                    </div>
                    <details>
                        <summary className="cursor-pointer text-purple-400">Advanced Options</summary>
                        <div className="mt-2 space-y-2">
                             <input type="text" placeholder="Vault ID" className="block w-full bg-gray-800 border-gray-700 rounded-md p-2 placeholder-gray-500" />
                             <input type="text" placeholder="Session ID" className="block w-full bg-gray-800 border-gray-700 rounded-md p-2 placeholder-gray-500" />
                        </div>
                    </details>
                </div>
                <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                    <pre><code>
<span className="text-purple-400">from</span> notte_sdk <span className="text-purple-400">import</span> NotteClient{"\n\n"}
notte = NotteClient({"\n"}
    api_key=<span className="text-green-400">"sk-..."</span>{"\n"}
){"\n\n"}
response = notte.agents.run({"\n"}
    task=<span className="text-green-400">"Find the latest job openings on notte.cc"</span>{"\n"}
){"\n\n"}
<span className="text-purple-400">print</span>(response.answer)
                    </code></pre>
                </div>
            </Card>
        </section>

        {/* Main API/Features Section */}
        <section className="py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">One API. All The Tools.</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Create instant Browser sessions. Reason and plan. Scrape. Act. Auth. Reason again.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard 
                    icon={<Zap size={24} className="text-purple-400" />}
                    title="Agent Run"
                    description="One call to do it all. Give it a goal, it plans, perceives, navigates, and acts. Autonomous web agents end-to-end."
                />
                <FeatureCard 
                    icon={<HardDrive size={24} className="text-purple-400" />}
                    title="Browser Sessions"
                    description="Headless browsers, without the headache. Spin up secure, scalable browser sessions your agent can control."
                />
                <FeatureCard 
                    icon={<GitBranch size={24} className="text-purple-400" />}
                    title="Workflows"
                    description="Discover how Notte powers your automated tasks, from data extraction to regression testing."
                />
            </div>
        </section>
        
        {/* Agent Ecosystem Section */}
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Agent Ecosystem</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Agents deserve the right tooling, all in one place.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                {[{href: "/lp/vault", text: "Vault"}, {href: "/lp/persona", text: "Persona"}, {href: "/lp/notifiers", text: "Notifiers"}, {href: "/lp/payments", text: "Payments"}, {href: "/lp/storage", text: "Storage"}].map(item => (
                    <Link key={item.href} href={item.href} className="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 hover:border-purple-500 transition-all">
                        <span className="font-semibold">{item.text}</span>
                    </Link>
                ))}
            </div>
        </section>

        {/* Benchmarks Section */}
        <section className="py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Leading the Industry in Performance</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Notte consistently outperforms other solutions in reliability and task completion.</p>
            </div>
            <Card className="max-w-3xl mx-auto space-y-6">
                <BenchmarkBar name="Notte" percentage={86} color="bg-purple-500" />
                <BenchmarkBar name="Browser Use" percentage={77} color="bg-indigo-500" />
                <BenchmarkBar name="Runner H 0.1" percentage={67} color="bg-blue-500" />
                <BenchmarkBar name="Computer Use" percentage={52} color="bg-cyan-500" />
                <BenchmarkBar name="Convergence Proxy Lite" percentage={38} color="bg-teal-500" />
            </Card>
            <div className="text-center mt-8">
                <Link href="https://github.com/nottelabs/open-operator-evals" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-semibold">
                    Read the full blog about the benchmarks <ArrowRight className="inline-block w-4 h-4 ml-1" />
                </Link>
            </div>
        </section>


        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Pricing Plans</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Start for free, then scale as you grow. No-nonsense pricing.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <PricingCard title="Free" price="$0" description="Perfect for indie hackers and opensource projects. 500 lifetime credits." buttonText="Get Started" />
                <PricingCard title="API Credits Pack" price="$10" description="Need additional credits? Top up your account with extra API credits. 1000 API Credits." buttonText="Buy Credits" />
                <PricingCard title="Pro" price="$79/mo" description="To build planet scale web agents and scrapers. 10,000 monthly credits." buttonText="Upgrade to Pro" isFeatured={true} />
                <PricingCard title="Enterprise" price="Custom" description="Custom agent stack tailored to your organisation. Dedicated support." buttonText="Contact Sales" />
            </div>
        </section>
        
        {/* Tutorials Section */}
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Start Building</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Learn how to build and run web agents with Notte.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Link href="/tutorial/quickstart">
                    <Card className="h-full hover:border-purple-500 transition-colors">
                        <h3 className="text-xl font-semibold text-white">Quickstart with Notte</h3>
                        <p className="mt-2 text-gray-400">Run your first Notte agent in under five minutes and watch it browse the web using natural language.</p>
                        <p className="mt-4 text-purple-400 font-semibold flex items-center">
                            Start Tutorial <ArrowRight className="ml-2 w-4 h-4" />
                        </p>
                    </Card>
                </Link>
                <Link href="/tutorial/how-it-works">
                    <Card className="h-full hover:border-purple-500 transition-colors">
                        <h3 className="text-xl font-semibold text-white">How Notte Works</h3>
                        <p className="mt-2 text-gray-400">Understand how agents think, observe, and act—and how the perception layer helps LLMs interact with real web pages.</p>
                        <p className="mt-4 text-purple-400 font-semibold flex items-center">
                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </p>
                    </Card>
                </Link>
            </div>
        </section>

        {/* SDK Examples Section */}
        <section className="py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Powerful & Simple SDK</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Simple Python code snippets to automate web tasks with Notte.</p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-950 rounded-lg p-6 font-mono text-sm text-gray-300 border border-gray-700">
                    <pre><code>
<span className="text-gray-500"># Scrape trending repositories on GitHub</span>{"\n"}
<span className="text-purple-400">from</span> notte_sdk <span className="text-purple-400">import</span> NotteClient{"\n\n"}
client = NotteClient(api_key=<span className="text-green-400">"sk-..."</span>){"\n\n"}
response = client.agents.run({"\n"}
    task=<span className="text-green-400">"What are the trending Python repos on GitHub?"</span>,{"\n"}
    url=<span className="text-green-400">"https://github.com/trending/python"</span>{"\n"}
){"\n\n"}
<span className="text-purple-400">print</span>(response.answer)
                    </code></pre>
                </div>
                <div className="space-y-4">
                    {[
                        "Find Job Openings",
                        "Scrape Trending Repos",
                        "Monitor Website Changes",
                        "Extract News Headlines",
                        "Get GitHub Stars",
                        "Get Weather Info"
                    ].map(item => (
                        <div key={item} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                            <span>{item}</span>
                        </div>
                    ))}
                     <Link href="https://console.notte.cc/apikeys" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors mt-4">
                        Get Your API Key
                    </Link>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}