import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'X', href: 'https://x.com/nottecore' },
    { name: 'Andrea Pinto', href: 'https://www.linkedin.com/in/pinto-andrea/' },
    { name: 'Lucas Giordano', href: 'https://www.linkedin.com/in/giordano-lucas/' },
  ];

  return (
    <footer className="bg-neutral-950/50 border-t border-neutral-800/50">
      <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-400 transition-colors duration-200"
            >
              <span className="sr-only">{item.name}</span>
              {item.name}
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-neutral-500">
            &copy; {new Date().getFullYear()} Notte Labs, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;