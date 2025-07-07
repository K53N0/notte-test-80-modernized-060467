import Link from 'next/link';
import React from 'react';

const Header = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Agent Builder', href: '/builder' },
    { name: 'Careers', href: '/careers' },
    { name: 'Tutorials', href: '/tutorial' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Notte</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors text-foreground/60 hover:text-foreground/80"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Mobile menu could be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;