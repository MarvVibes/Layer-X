import React from 'react';
import { motion } from 'motion/react';
import { Activity, Globe, Layers, Lock, TrendingUp, Network, Landmark, Target, ShieldAlert, ArrowRight } from 'lucide-react';
import { InteractiveCard, ScrollReveal } from '../components/Shared';

const UseCasesHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden border-b border-primary/5 bg-background">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.img 
          src="/use-hero.png" 
          alt="Capital Scaling Array"
          initial={{ scale: 1.05, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 0.3, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="w-full h-full object-cover mix-blend-lighten opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,107,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at top, black, transparent 70%)'}} />

      <ScrollReveal className="relative z-10 max-w-4xl mx-auto">
         <h1 className="text-4xl md:text-7xl font-headline font-bold tracking-tight mb-6 text-on-surface">
           Operational <span className="text-primary glow-text">Scenarios</span>
         </h1>
         <p className="text-lg md:text-2xl text-on-surface-variant max-w-2xl mx-auto font-body">
           Where intelligent agents meet capital execution.
         </p>
      </ScrollReveal>
    </section>
  );
};

const ExpandedBlocks = () => {
  const scenarios = [
    {
      title: "Autonomous Trading Agents",
      desc: "Deploy sophisticated algorithms that execute arbitrage, latency-sensitive trades, and predictive rebalancing without requiring human signature.",
      icon: TrendingUp,
      visual: (
        <div className="w-full h-full relative flex items-center justify-center">
           <svg className="w-full h-32 opacity-50" viewBox="0 0 400 100" preserveAspectRatio="none">
             <motion.path 
               d="M0,50 Q40,10 80,50 T160,50 T240,50 T320,50 T400,50" 
               fill="none" 
               stroke="var(--color-primary)" 
               strokeWidth="2"
               animate={{ d: [
                 "M0,50 Q40,10 80,50 T160,50 T240,50 T320,50 T400,50",
                 "M0,50 Q40,90 80,50 T160,10 T240,80 T320,20 T400,50",
                 "M0,50 Q40,10 80,50 T160,50 T240,50 T320,50 T400,50"
               ] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             />
           </svg>
           <motion.div animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-4 h-4 rounded-full bg-primary/40 right-1/4" />
        </div>
      )
    },
    {
      title: "DAO Treasury Automation",
      desc: "Set constitutional boundaries for the DAO, and let the AI harvest yield, farm airdrops, and auto-compound positions across DeFi autonomously.",
      icon: Landmark,
      visual: (
        <div className="w-full h-full relative flex items-center justify-center">
           <Network className="w-24 h-24 text-primary/30 absolute" />
           <motion.div animate={{ rotateY: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="preserve-3d absolute">
             <Landmark className="w-12 h-12 text-primary drop-shadow-[0_0_15px_rgba(255,107,0,0.8)]" />
           </motion.div>
        </div>
      )
    },
    {
      title: "AI Portfolio Management",
      desc: "Hyper-personalized index construction. The agent actively manages risk exposure and re-allocates portfolio weighting instantly based on global events.",
      icon: Target,
      visual: (
        <div className="w-full h-full relative grid grid-cols-3 gap-2 p-8">
           {[...Array(9)].map((_, i) => (
             <motion.div 
               key={i} 
               className="bg-primary/20 rounded-sm"
               animate={{ opacity: [0.2, 0.8, 0.2] }}
               transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
             />
           ))}
        </div>
      )
    },
    {
      title: "Real-Time Risk Mitigation",
      desc: "Flash-crash protection. Within 50ms of detecting a protocol exploit or massive liquidation event, the agent atomically unwinds positions to safety.",
      icon: ShieldAlert,
      visual: (
        <div className="w-full h-full relative flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2], borderColor: ['rgba(255,107,0,0.2)', 'rgba(255,107,0,0)', 'rgba(255,107,0,0.2)'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute rounded-full border-2 w-32 h-32"
          />
          <ShieldAlert className="w-16 h-16 text-primary drop-shadow-[0_0_20px_rgba(255,107,0,0.8)]" />
        </div>
      )
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {scenarios.map((item, i) => (
          <ScrollReveal key={i}>
            <div className="group relative w-full overflow-hidden rounded-2xl border border-white/5 bg-surface/40 hover:bg-surface-bright transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_50px_rgba(255,107,0,0.1)] cursor-crosshair">
              
              {/* Soft orange glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1)_0,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none flex scale-110" />

              <div className="grid md:grid-cols-2 min-h-[300px]">
                {/* Content Side */}
                <div className={`p-10 md:p-16 flex flex-col justify-center ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tight mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    {item.desc}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-headline font-bold uppercase tracking-widest text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    Explore Architecture <ArrowRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Visual Side */}
                <div className={`relative bg-black/40 border-primary/10 flex items-center justify-center overflow-hidden ${i % 2 !== 0 ? 'md:border-r md:order-1' : 'md:border-l'}`}>
                  {item.visual}
                  
                  {/* Glass overly effect */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

const OutcomeSection = () => {
  return (
    <section className="py-32 px-6 bg-surface-container-lowest border-y border-primary/5 relative">
      <ScrollReveal className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tight">Measurable <span className="text-primary glow-text">Advantage</span></h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { metric: "100%", label: "Continuous Execution", desc: "Agents do not sleep. 24/7/365 active portfolio management." },
            { metric: "99.9%", label: "Human Error Reduced", desc: "Cryptographically bound constraints eliminate emotional or fat-finger trading mistakes." },
            { metric: "<50ms", label: "Reaction Latency", desc: "Atomically respond to market changes faster than any human operator." }
          ].map((item, i) => (
             <InteractiveCard key={i} className="rounded-xl border border-primary/10 bg-surface/50 p-10 text-center hover:border-primary/40 transition-colors">
               <div className="text-5xl md:text-6xl font-headline font-black text-on-surface mb-6 drop-shadow-[0_0_15px_rgba(255,107,0,0.2)]">{item.metric}</div>
               <div className="text-sm font-headline font-bold uppercase tracking-widest text-primary mb-4">{item.label}</div>
               <p className="text-on-surface-variant text-sm">{item.desc}</p>
             </InteractiveCard>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

const UseCasesCTA = () => {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden border-t border-primary/5 mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" 
      />

      <ScrollReveal className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/20 bg-primary/5 rounded-full mb-8">
           <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
           <span className="text-[10px] font-headline uppercase tracking-widest text-primary font-bold">Initialization Ready</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-tight mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">Deploy intelligence</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40 drop-shadow-[0_0_30px_rgba(255,107,0,0.5)] italic">at scale.</span>
        </h2>
        
        <div className="pt-4">
          <button className="group relative px-12 py-5 rounded-sm font-headline font-bold tracking-widest uppercase text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,107,0,0.2)] hover:shadow-[0_0_60px_rgba(255,107,0,0.4)] bg-surface border border-primary/30">
            <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-300">Activate Interface</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default function UseCasesPage() {
  return (
    <div className="bg-background">
      <UseCasesHero />
      <ExpandedBlocks />
      <OutcomeSection />
      <UseCasesCTA />
    </div>
  );
}
