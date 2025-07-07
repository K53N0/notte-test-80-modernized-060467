import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type PageProps = {
  params: { slug: string };
};

type LandingPageContent = {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
};

const pageContent: Record<string, LandingPageContent> = {
  vault: {
    title: 'Notte Secure Vault',
    description: 'Securely store and manage your agent\'s sensitive data, like API keys, credentials, and cookies. All encrypted and accessible with a single API call.',
    features: [
      {
        title: 'End-to-End Encryption',
        description: 'All data stored in the vault is encrypted at rest and in transit, ensuring maximum security.'
      },
      {
        title: 'Granular Access Control',
        description: 'Define fine-grained permissions to control which agents can access specific secrets.'
      },
      {
        title: 'Seamless Integration',
        description: 'Natively integrated with the Notte agent and session lifecycle for effortless use.'
      },
      {
        title: 'Audit Logs',
        description: 'Keep track of all vault activities with comprehensive audit logs for security and compliance.'
      }
    ],
  },
  persona: {
    title: 'Notte Agent Persona',
    description: 'Define and manage consistent personas for your web agents. Ensure your agents behave predictably and maintain a consistent identity across sessions.',
    features: [
      {
        title: 'Reusable Profiles',
        description: 'Create and manage multiple personas with unique browsing histories, cookies, and local storage.'
      },
      {
        title: 'Consistent Behavior',
        description: 'Assign personas to agents to ensure they maintain a consistent identity across complex, long-running tasks.'
      },
      {
        title: 'Session Isolation',
        description: 'Each persona operates in a sandboxed environment, preventing data leakage between different agent identities.'
      },
      {
        title: 'Realistic Simulation',
        description: 'Perfect for social media automation, ad verification, and personalized user journey testing.'
      }
    ],
  },
  notifiers: {
    title: 'Notte Notifiers',
    description: 'Set up custom alerts and notifications for your agent\'s activities. Get notified on task completion, errors, or custom-defined events.',
    features: [
      {
        title: 'Multi-Channel Alerts',
        description: 'Receive notifications via email, Slack, Discord, or custom webhooks.'
      },
      {
        title: 'Custom Triggers',
        description: 'Define specific events or conditions that should trigger a notification for full control.'
      },
      {
        title: 'Rich Context',
        description: 'Notifications include detailed context, logs, and outputs to help you quickly diagnose issues.'
      },
      {
        title: 'Easy Setup',
        description: 'Integrate notifiers into your agent workflows with just a few lines of code.'
      }
    ],
  },
  payments: {
    title: 'Notte Payments',
    description: 'Empower your agents to handle financial transactions. Integrate with Stripe and other payment providers to automate checkouts, subscriptions, and financial workflows.',
    features: [
      {
        title: 'Stripe Integration',
        description: 'Out-of-the-box support for Stripe to handle complex payment flows securely.'
      },
      {
        title: 'Automated Checkouts',
        description: 'Build agents that can autonomously navigate checkout processes and complete purchases.'
      },
      {
        title: 'Secure Credential Handling',
        description: 'Leverages Notte Vault to securely manage payment credentials and API keys.'
      },
      {
        title: 'Transaction Monitoring',
        description: 'Track and log all payment activities for auditing and reconciliation purposes.'
      }
    ],
  },
  storage: {
    title: 'Notte Storage',
    description: 'Persistent, scalable storage for your web agents. Save session data, scraped content, and task outputs in a durable and easily accessible object store.',
    features: [
      {
        title: 'S3-Compatible API',
        description: 'Use a familiar API to store and retrieve files, screenshots, and structured data.'
      },
      {
        title: 'Durable and Scalable',
        description: 'Built on enterprise-grade infrastructure to handle any amount of data you generate.'
      },
      {
        title: 'Data Lifecycle Management',
        description: 'Set policies for automatic data expiration and archival to manage costs.'
      },
      {
        title: 'Integrated with Agents',
        description: 'Seamlessly save and load data from within your agent\'s execution environment.'
      }
    ],
  },
  automation: {
    title: 'Browser-Based Workflow Automation',
    description: 'Automate any browser-based workflow. From filling out forms to managing accounts, Notte provides the tools to automate tedious and repetitive tasks at scale.',
    features: [
      {
        title: 'AI-Powered Actions',
        description: 'Use natural language to instruct agents to perform complex multi-step tasks on any website.'
      },
      {
        title: 'Reliable Execution',
        description: 'Our perception layer ensures agents can reliably interact with web elements, even when UIs change.'
      },
      {
        title: 'Run at Scale',
        description: 'Spin up thousands of concurrent browser sessions to parallelize your automation workflows.'
      },
      {
        title: 'End-to-End Solution',
        description: 'From browser infrastructure to agent logic, Notte provides the complete stack you need.'
      }
    ],
  },
  'data-extraction': {
    title: 'Reliable Web Scraping & Data Extraction',
    description: 'Turn any website into a structured API. Extract text, images, and structured data with high accuracy, even from complex and dynamic sites.',
    features: [
      {
        title: 'Structured Output',
        description: 'Instruct agents to extract data in a specific JSON schema, ready for your applications.'
      },
      {
        title: 'Handles Dynamic Content',
        description: 'Notte agents can interact with JavaScript-heavy websites, log in, and navigate to extract hard-to-reach data.'
      },
      {
        title: 'Vision-Enabled Scraping',
        description: 'Leverage multimodal models to understand and extract information from images, charts, and canvases.'
      },
      {
        title: 'Bypass Defenses',
        description: 'Our managed browser infrastructure helps overcome common anti-scraping measures.'
      }
    ],
  },
  testing: {
    title: 'Scalable and Automated E2E Testing',
    description: 'Use Notte agents to simulate real user interactions and test your web applications for functionality, performance, and reliability.',
    features: [
      {
        title: 'Natural Language Tests',
        description: 'Write test cases in plain English, describing user journeys and expected outcomes.'
      },
      {
        title: 'Visual Regression Testing',
        description: 'Agents can take screenshots and perform visual comparisons to catch UI bugs.'
      },
      {
        title: 'Real-World Scenarios',
        description: 'Simulate complex user behaviors that are difficult to script with traditional testing frameworks.'
      },
      {
        title: 'CI/CD Integration',
        description: 'Easily integrate Notte agent tests into your existing development and deployment pipelines.'
      }
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(pageContent).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const content = pageContent[params.slug];
  if (!content) {
    return {
      title: 'Page Not Found',
    };
  }
  return {
    title: `${content.title} | Notte`,
    description: content.description,
  };
}

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2} 
        stroke="currentColor" 
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);


export default function LandingPage({ params }: PageProps) {
  const { slug } = params;
  const content = pageContent[slug];

  if (!content) {
    notFound();
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              {content.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {content.description}
            </p>
          </div>

          <div className="mt-20">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {content.features.map((feature) => (
                <div key={feature.title} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                      <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

           <div className="mt-24 text-center">
            <a
              href="https://console.notte.cc/apikeys"
              className="rounded-md bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started for Free
            </a>
            <p className="mt-4 text-sm text-gray-500">
                Part of the Notte Agent Ecosystem.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}