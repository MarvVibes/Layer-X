import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Shield, Zap, Network, ArrowRight, Lock, Activity, Link as LinkIcon, Database } from 'lucide-react';
import { InteractiveCard, ScrollReveal } from '../components/Shared';
import { Link } from 'react-router-dom';

const ArchitectureHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[60vh] flex items-center border-b border-primary/5 bg-background">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.img 
          src="/arch-hero.png" 
          alt="Abstract Architecture"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>
      
      {/* Background Abstract System Diagram */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px]"
            initial={{ left: '-100%', top: `${Math.random() * 100}%`, width: `${30 + Math.random() * 50}%` }}
            animate={{ left: '150%' }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-headline font-bold uppercase tracking-[0.3em] text-primary">Technical Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tight leading-tight mb-6">
            System <span className="text-primary glow-text">Architecture</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-body">
            The neural execution layer connecting AI to Web3.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

const SystemOverview = () => {
  const steps = [
    { icon: Network, title: "AI Agent" },
    { icon: Cpu, title: "Neural Layer" },
    { icon: Shield, title: "Permission Engine" },
    { icon: Zap, title: "Execution Protocol" },
    { icon: Database, title: "Blockchain" }
  ];

  return (
    <section className="py-24 px-6 border-b border-white/5 bg-surface-container-lowest relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-2xl font-headline font-bold tracking-widest uppercase text-on-surface">Data Flow Pipeline</h2>
        </ScrollReveal>

        <ScrollReveal className="relative flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-primary/10 -translate-y-1/2 z-0">
             <motion.div 
               className="h-full w-32 bg-gradient-to-r from-transparent via-primary to-transparent"
               animate={{ x: ['-200%', '800%'] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
          </div>

          {steps.map((step, i) => (
             <div key={i} className="relative z-10 flex flex-col items-center gap-4 group w-full md:w-auto">
                <InteractiveCard className="rounded-full">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface border border-primary/20 flex items-center justify-center backdrop-blur-md relative overflow-hidden group-hover:border-primary/50 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(255,107,0,0.8)]" />
                  </div>
                </InteractiveCard>
                <div className="text-[10px] font-headline tracking-[0.2em] font-bold uppercase text-on-surface/80 text-center w-24">
                  {step.title}
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-primary/40 md:hidden mt-2" />
                )}
             </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

const CoreComponents = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Component 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <ScrollReveal className="space-y-6">
             <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center border border-primary/20">
                <Cpu className="w-6 h-6 text-primary" />
             </div>
             <h3 className="text-3xl md:text-5xl font-headline font-bold">Neural Control Layer</h3>
             <p className="text-on-surface-variant text-base leading-relaxed">
               The heart of LAYER-X. Our proprietary interpretation engine converts unstructured LLM intents into highly optimized, deterministic bytecode. 
               This module performs static analysis on proposed workflows before they even reach the permission engine, flagging semantic errors in real-time.
             </p>
           </ScrollReveal>
           <ScrollReveal className="relative h-80 rounded-2xl glass-panel p-4 overflow-hidden border border-white/5">
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute w-32 h-32 bg-primary blur-3xl rounded-full" />
             </div>
             <div className="w-full h-full relative border border-primary/10 rounded-xl flex items-center justify-center">
                <Network className="w-24 h-24 text-primary opacity-50" />
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#ff6b00]"
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    style={{ top: `${30 + Math.random() * 40}%`, left: `${30 + Math.random() * 40}%` }}
                  />
                ))}
             </div>
           </ScrollReveal>
        </div>

        {/* Component 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <ScrollReveal className="order-2 md:order-1 relative h-80 rounded-2xl glass-panel p-4 overflow-hidden border border-white/5">
             <div className="w-full h-full relative border border-primary/10 rounded-xl flex items-center justify-center">
                <motion.div
                  animate={{ rotateY: [0, 180, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="relative preserve-3d"
                >
                  <Shield className="w-24 h-24 text-primary opacity-80" />
                </motion.div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
             </div>
           </ScrollReveal>
           <ScrollReveal className="order-1 md:order-2 space-y-6">
             <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center border border-primary/20">
                <Shield className="w-6 h-6 text-primary" />
             </div>
             <h3 className="text-3xl md:text-5xl font-headline font-bold">Permission Engine</h3>
             <p className="text-on-surface-variant text-base leading-relaxed">
               Decentralized trust constraints. Users define exact operational guardrails—spending limits, unapproved contract blocks, and time-based frequency caps.
               If a neural command violates the active permission bounds, the transaction is cryptographically rejected before signature.
             </p>
           </ScrollReveal>
        </div>

        {/* Component 3 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <ScrollReveal className="space-y-6">
             <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center border border-primary/20">
                <Zap className="w-6 h-6 text-primary" />
             </div>
             <h3 className="text-3xl md:text-5xl font-headline font-bold">Execution Protocol</h3>
             <p className="text-on-surface-variant text-base leading-relaxed">
               The final stage: signing and broadcasting. LAYER-X employs a proprietary mempool interface that routes around traditional latency, securing the agent's intent via flashbots.
               Atomic batching guarantees complex multi-step intentions execute as a single robust transaction.
             </p>
           </ScrollReveal>
           <ScrollReveal className="relative h-80 rounded-2xl glass-panel p-4 overflow-hidden border border-white/5">
             <div className="w-full h-full relative border border-primary/10 rounded-xl overflow-hidden bg-surface/30">
               {[...Array(8)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                   style={{ top: `${10 + i * 11}%`, left: 0 }}
                   animate={{ x: ['-100%', '100%'] }}
                   transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: Math.random() * 2 }}
                 />
               ))}
             </div>
           </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const SecurityLayer = () => {
  return (
    <section className="py-32 px-6 bg-surface-container-lowest border-y border-primary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center z-10 relative">
        <ScrollReveal className="md:w-1/2 space-y-12">
          <div>
            <h2 className="text-[10px] font-headline font-black uppercase text-primary tracking-[0.4em] mb-4">Critical Infrastructure</h2>
            <h3 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">Security Layer</h3>
            <p className="text-on-surface-variant mt-6 text-lg">
              Absolute control over autonomous action. LAYER-X ensures AI behavior remains bounded within rigid mathematically proven limits.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              { icon: Lock, label: "Hard Spending Limits", val: "Enforced" },
              { icon: Activity, label: "Risk Boundaries", val: "Active" },
              { icon: Shield, label: "Access Control", val: "Tier 1" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 glass-panel border border-primary/10 rounded-sm">
                 <div className="flex items-center gap-4">
                   <item.icon className="w-5 h-5 text-primary/70" />
                   <span className="font-headline font-semibold text-sm uppercase tracking-widest">{item.label}</span>
                 </div>
                 <span className="text-[9px] px-2 py-1 bg-primary/10 text-primary rounded-sm font-bold uppercase tracking-wider">{item.val}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="md:w-1/2 flex justify-center relative">
          <div className="w-full max-w-sm aspect-square relative flex items-center justify-center">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-primary/10 border-dashed rounded-full" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-8 border border-primary/20 rounded-full" />
            <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-16 bg-primary/20 blur-xl rounded-full" />
            <Shield className="w-24 h-24 text-primary absolute z-10 drop-shadow-[0_0_20px_rgba(255,107,0,1)]" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const MultiChain = () => {
  return (
    <section className="py-32 px-6 relative text-center border-b border-primary/5">
      <ScrollReveal className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tight mb-6">Multi-Chain Execution</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Agents natively navigate liquidity and execution environments across Ethereum, Layer 2s, and Solana—routing around network congestion entirely automatically.
        </p>
      </ScrollReveal>

      <ScrollReveal className="max-w-5xl mx-auto h-[300px] relative flex items-center justify-center">
         <div className="absolute w-full h-[1px] bg-primary/20 left-0 top-1/2 -translate-y-1/2" />
         <div className="flex justify-between w-full relative z-10 px-4 md:px-20">
           {['Ethereum', 'Arbitrum', 'Solana'].map((chain, i) => (
             <InteractiveCard key={chain} className="w-24 h-24 rounded-full">
               <div className="w-full h-full bg-surface border border-primary/30 rounded-full flex flex-col items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                  <LinkIcon className="w-6 h-6 text-primary mb-2" />
                  <span className="text-[8px] font-headline uppercase tracking-widest font-bold text-on-surface/60">{chain}</span>
               </div>
             </InteractiveCard>
           ))}
         </div>
         {/* Animated Cross Chain Flow */}
         <motion.div 
           className="absolute h-1 blur-sm bg-primary top-1/2 -translate-y-1/2 left-0"
           animate={{ x: ['0vw', '100vw'], width: ['50px', '150px', '50px'] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         />
      </ScrollReveal>
    </section>
  );
};

const ClosingCTA = () => {
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
           <span className="text-[10px] font-headline uppercase tracking-widest text-primary font-bold">System Infrastructure</span>
        </div>
        
        <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter leading-tight mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">Intelligence requires control.</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40 drop-shadow-[0_0_30px_rgba(255,107,0,0.5)] italic">Control requires infrastructure.</span>
        </h2>
        
        <div className="pt-4">
          <Link to="/use-cases" className="inline-block group relative px-12 py-5 rounded-sm font-headline font-bold tracking-widest uppercase text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,107,0,0.2)] hover:shadow-[0_0_60px_rgba(255,107,0,0.4)] bg-surface border border-primary/30">
            <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-300">View Use Cases</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default function ArchitecturePage() {
  return (
    <div className="bg-background">
      <ArchitectureHero />
      <SystemOverview />
      <CoreComponents />
      <SecurityLayer />
      <MultiChain />
      <ClosingCTA />
    </div>
  );
}
