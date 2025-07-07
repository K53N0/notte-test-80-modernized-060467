import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing - Notte',
  description: 'Flexible pricing plans for building reliable web agents and scrapers at any scale.',
};

const plans = [
  {
    name: 'Free',
    price: '$0',
    priceSuffix: '',
    description: 'Perfect for indie hackers and opensource projects.',
    features: ['1 active agent & session', '1 active vault', '500 lifetime credits'],
    cta: 'Get Started',
    href: 'https://console.notte.cc/apikeys',
    highlighted: false,
  },
  {
    name: 'API Credits Pack',
    price: '$10',
    priceSuffix: '',
    description: 'Need additional credits? Top up your account with extra API credits.',
    features: ['1000 API Credits', 'Instant delivery', 'No expiration'],
    cta: 'Buy Credits',
    href: 'https://console.notte.cc/apikeys',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$79',
    priceSuffix: '/month',
    description: 'To build planet scale web agents and scrapers.',
    features: ['5 active agent & session', '1 active vault', '10,000 monthly credits'],
    cta: 'Upgrade to Pro',
    href: 'https://console.notte.cc/apikeys',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceSuffix: '',
    description: 'Custom agent stack tailored to your organisation.',
    features: ['Dedicated support team', 'SLA', 'On-premise deployments', 'Custom integrations'],
    cta: 'Contact Sales',
    href: 'mailto:sales@notte.cc',
    highlighted: false,
  },
];

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className={`h-6 w-5 flex-shrink-0 ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default function PricingPage() {
  return (
    <div className="bg-gray-950 text-white antialiased">
      <main className="isolate">
        <div className="relative pt-24 pb-32 sm:pt-32">
            <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
                <div 
                    className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#0891b2] to-[#67e8f9]" 
                    style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
                </div>
            </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Pricing for every scale
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Rapidly build reliable web agents that act and scrape on any site. Notte provides the full-stack web agents framework you needed.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
              {plans.slice(0, 2).map((plan, i) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-3xl bg-gray-900 p-8 shadow-xl ring-1 ring-white/10 ${i === 1 ? 'lg:z-10 lg:rounded-l-none' : 'lg:rounded-r-none'}`}
                >
                  <h3 className="text-lg font-semibold leading-8 text-white">{plan.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-300">{plan.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-300">{plan.priceSuffix}</span>
                  </p>
                  <Link
                    href={plan.href}
                    target={plan.href.startsWith('http') ? '_blank' : '_self'}
                    className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white bg-white/10 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {plan.cta}
                  </Link>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="text-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {plans.slice(2).map((plan, i) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-3xl p-8 shadow-xl ring-1 ring-white/10 ${plan.highlighted ? 'z-10 bg-gray-900 ring-2 ring-cyan-500' : 'bg-gray-900/80' } ${ i === 0 ? 'lg:rounded-l-none' : 'lg:rounded-r-none'}`}
                >
                  <h3 className="text-lg font-semibold leading-8 text-white">{plan.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-300">{plan.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-300">{plan.priceSuffix}</span>
                  </p>
                  <Link
                    href={plan.href}
                    target={plan.href.startsWith('http') ? '_blank' : '_self'}
                    className={`mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      plan.highlighted
                        ? 'bg-cyan-500 text-white shadow-sm hover:bg-cyan-400 focus-visible:outline-cyan-500'
                        : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className={`${plan.highlighted ? 'text-cyan-400' : 'text-white'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}