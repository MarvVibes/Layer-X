import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Zap, Flame, BarChart3, Lock, Network, ArrowRight } from 'lucide-react';
import { InteractiveCard, ScrollReveal } from '../components/Shared';

const TokenHero = () => {
  const { scrollY } = useScroll();
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 360]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -720]);
  const yBase = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[60vh] flex items-center justify-center text-center overflow-hidden border-b border-primary/5 bg-background">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.img 
          src="/tok-hero.png" 
          alt="Token Core"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full object-cover mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent" />
      </div>

      <motion.div style={{ y: yBase }} className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 Mix-blend-screen z-1">
         <div className="relative w-[500px] h-[500px]">
            <motion.div style={{ rotate: rotate1 }} className="absolute inset-0 rounded-full border border-primary/40 border-dashed" />
            <motion.div style={{ rotate: rotate2 }} className="absolute inset-10 rounded-full border-2 border-primary/20" />
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-32 rounded-full bg-primary blur-[100px]" />
         </div>
         <div className="absolute font-headline text-[300px] font-thin text-primary glow-text select-none">X</div>
      </motion.div>

      <ScrollReveal className="relative z-10 max-w-4xl mx-auto mt-20">
         <div className="w-16 h-16 mx-auto mb-8 bg-surface border border-primary/20 rounded-full flex items-center justify-center p-2 backdrop-blur-md">
            <div className="w-full h-full rounded-full border border-primary/40 flex items-center justify-center">
              <span className="text-xl font-headline font-bold text-primary">$X</span>
            </div>
         </div>
         <h1 className="text-4xl md:text-7xl font-headline font-bold tracking-tight mb-6 text-on-surface">
           The Execution Layer <span className="text-primary glow-text">Asset</span>
         </h1>
         <p className="text-lg md:text-2xl text-on-surface-variant max-w-2xl mx-auto font-body">
           Powering every intelligent action on-chain.
         </p>
      </ScrollReveal>
    </section>
  );
};

const UtilityBreakdown = () => {
  const utilities = [
    { label: "Execution Fuel", desc: "Agents consume $X to pay neural processing fees and standard network gas natively.", icon: Zap },
    { label: "Permission Staking", desc: "Deployers must lock $X to instantiate high-level autonomous permissions and bounds.", icon: Lock },
    { label: "Security Enforcement", desc: "Validators earn $X by verifying execution pathways do not exceed mathematical constraints.", icon: Shield },
    { label: "Governance", desc: "Token holders vote on core protocol parameters and risk tolerances for the ecosystem.", icon: BarChart3 }
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
           <h2 className="text-2xl font-headline font-bold tracking-widest uppercase text-on-surface">Ecosystem Utility</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {utilities.map((item, i) => (
             <ScrollReveal key={i} className="h-full">
               <InteractiveCard className="h-full">
                 <div className="h-full bg-surface/50 border border-white/5 p-8 rounded-xl flex flex-col items-center text-center group hover:bg-surface-bright transition-colors hover:border-primary/20">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,107,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,107,0,0.3)]">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-headline font-bold mb-3">{item.label}</h3>
                    <p className="text-sm text-on-surface-variant">{item.desc}</p>
                 </div>
               </InteractiveCard>
             </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const TokenMechanics = () => {
  return (
    <section className="py-32 px-6 bg-surface-container-lowest border-y border-primary/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center border-l-2 border-primary/20 pl-8 md:pl-16 relative">
        <ScrollReveal className="space-y-12 relative z-10">
           <div>
             <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">Token Mechanics</h2>
             <p className="text-on-surface-variant text-lg leading-relaxed">
               A highly deterministic deflationary model tied directly to network usage and autonomous execution throughput.
             </p>
           </div>
           
           <div className="space-y-8">
             <div>
               <div className="flex justify-between items-center text-sm font-headline font-bold uppercase tracking-widest mb-2">
                 <span>Ecosystem Rewards</span> <span>45%</span>
               </div>
               <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                 <motion.div initial={{ width: 0 }} whileInView={{ width: '45%' }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }} className="h-full bg-primary/80" />
               </div>
             </div>
             <div>
               <div className="flex justify-between items-center text-sm font-headline font-bold uppercase tracking-widest mb-2">
                 <span>Core Contributors</span> <span>20%</span>
               </div>
               <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                 <motion.div initial={{ width: 0 }} whileInView={{ width: '20%' }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.4 }} className="h-full bg-primary/60" />
               </div>
             </div>
             <div>
               <div className="flex justify-between items-center text-sm font-headline font-bold uppercase tracking-widest mb-2">
                 <span>Community Treasury</span> <span>35%</span>
               </div>
               <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                 <motion.div initial={{ width: 0 }} whileInView={{ width: '35%' }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.6 }} className="h-full bg-primary/40" />
               </div>
             </div>
           </div>
        </ScrollReveal>

        <ScrollReveal className="relative p-10 bg-surface border border-white/5 rounded-2xl">
           <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary/10 border border-primary/20 px-4 py-1 rounded-sm flex items-center gap-2">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-[10px] uppercase font-headline font-bold text-primary tracking-widest">Deflationary Core</span>
           </div>
           <h3 className="text-2xl font-headline font-bold mb-4">Burn on Execution</h3>
           <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
             For every transaction executed by an autonomous agent on LAYER-X, a percentage of the $X neural fuel fee is permanently removed from circulation.
           </p>
           
           <div className="h-32 border-l border-b border-primary/20 relative flex items-end">
              {[40, 60, 45, 80, 50, 90, 30, 100].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="w-8 ml-4 bg-primary/40 rounded-t-sm relative border-t-2 border-primary group hover:bg-primary/80 transition-colors"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] text-primary font-bold transition-opacity">
                    +{h}
                  </div>
                </motion.div>
              ))}
           </div>
           <div className="text-center mt-4 text-[10px] font-headline uppercase text-on-surface/50 tracking-widest">
             Compute Volume vs Time
           </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const FlowVisualization = () => {
  return (
    <section className="py-32 px-6">
      <ScrollReveal className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-headline font-bold tracking-tight">Execution Pipeline</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 bg-surface-container-lowest border border-white/5 p-8 rounded-2xl relative">
          
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-primary/10 -translate-y-1/2 z-0" />
          <motion.div 
            className="hidden md:block absolute top-[calc(50%-1px)] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-transparent via-primary/80 to-transparent blur-[2px] z-0"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {[
            { label: "Intelligent AI", desc: "Intent Generation", icon: Network },
            { label: "$X Fuel Consumed", desc: "Neural Engine Fee", icon: Zap, highlight: true },
            { label: "On-Chain Action", desc: "Verifiable Execution", icon: ArrowRight }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center bg-background px-6 py-4 rounded-xl border border-primary/10 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${item.highlight ? 'bg-primary border border-primary drop-shadow-[0_0_15px_rgba(255,107,0,0.8)]' : 'bg-surface border border-white/10'}`}>
                <item.icon className={`w-5 h-5 ${item.highlight ? 'text-white' : 'text-primary'}`} />
              </div>
              <div className="text-sm font-headline font-bold text-on-surface tracking-wide">{item.label}</div>
              <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mt-1">{item.desc}</div>
            </div>
          ))}

        </div>
      </ScrollReveal>
    </section>
  );
};

const TokenCTA = () => {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden border-t border-primary/5 mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" 
      />

      <ScrollReveal className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/20 bg-primary/5 rounded-full mb-8">
           <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
           <span className="text-[10px] font-headline uppercase tracking-widest text-primary font-bold">Protocol Asset</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-tight mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40 drop-shadow-[0_0_30px_rgba(255,107,0,0.5)] italic">Fuel the interface.</span>
        </h2>
        
        <div className="pt-4">
          <button className="group relative px-12 py-5 rounded-sm font-headline font-bold tracking-widest uppercase text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,107,0,0.2)] hover:shadow-[0_0_60px_rgba(255,107,0,0.4)] bg-surface border border-primary/30">
            <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-300">Acquire $X</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default function TokenPage() {
  return (
    <div className="bg-background">
      <TokenHero />
      <UtilityBreakdown />
      <TokenMechanics />
      <FlowVisualization />
      <TokenCTA />
    </div>
  );
}
