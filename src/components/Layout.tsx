import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Terminal', path: '/' },
    { name: 'Architecture', path: '/architecture' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: '$X Token', path: '/token' },
    { name: 'Docs', path: '/docs' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-primary/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <Terminal className="w-5 h-5 text-primary" />
            <motion.div 
              className="absolute inset-0 bg-primary blur-sm opacity-0 group-hover:opacity-30 transition-opacity"
            />
          </div>
          <span className="text-lg font-headline font-bold tracking-tight uppercase text-on-surface">LAYER-X</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 font-headline text-[10px] font-medium tracking-[0.2em] uppercase">
          {links.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.name} to={item.path} className={`transition-colors relative group ${isActive ? 'text-primary' : 'text-on-surface/50 hover:text-on-surface'}`}>
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] transition-all group-hover:w-full shadow-[0_0_8px_rgba(255,107,0,0.5)] ${isActive ? 'w-full bg-primary' : 'w-0 bg-primary/60'}`} />
              </Link>
            )
          })}
        </div>

        <button className="bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-sm font-headline font-medium text-[10px] tracking-wider uppercase hover:bg-primary/20 hover:border-primary/50 transition-all active:scale-95">
          Enter Interface
        </button>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-background w-full py-20 border-t border-white/5 relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="text-2xl font-black text-primary font-headline tracking-tight uppercase">LAYER-X</span>
          </div>
          <p className="text-on-surface-variant font-headline text-[9px] tracking-[0.3em] uppercase text-center md:text-left">
            © 2026 LAYER-X NEURAL PROTOCOL. MILITARY GRADE ENCRYPTION ENABLED.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 font-headline text-[10px] tracking-[0.2em] uppercase font-bold text-on-surface/50">
          {['Terminal', 'Docs', 'X-Proto', 'Security'].map((item) => (
            <Link key={item} to={item === 'Docs' ? '/docs' : '/'} className="hover:text-primary transition-colors">{item}</Link>
          ))}
        </div>

        <div className="flex gap-6">
          {[Terminal, Globe, Shield].map((Icon, i) => (
            <Icon key={i} className="w-5 h-5 text-on-surface/40 hover:text-primary hover:scale-110 cursor-pointer transition-all" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
