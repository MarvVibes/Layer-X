import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Cpu, ShieldAlert, Lock, ChevronDown, CheckCircle2 } from 'lucide-react';
import { InteractiveCard, ScrollReveal } from '../components/Shared';

const DocsHero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 border-b border-primary/5 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.img 
          src="/doc-hero.png" 
          alt="Documentation Library"
          initial={{ scale: 1.05, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 0.25, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto text-left relative z-10">
        <ScrollReveal>
          <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-md flex items-center justify-center mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4 text-on-surface">
            Protocol Overview
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-body">
            Understanding the infrastructure that powers sovereign AI agents.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

const ContentSection = ({ title, children, id }: { title: string, children: React.ReactNode, id: string }) => (
  <ScrollReveal className="py-16 border-b border-white/5 scroll-mt-32" id={id}>
    <h2 className="text-2xl font-headline font-bold tracking-tight mb-8 flex items-center gap-4">
      <span className="w-8 h-[1px] bg-primary/50" />
      {title}
    </h2>
    <div className="pl-0 md:pl-12 text-on-surface-variant leading-relaxed space-y-6">
      {children}
    </div>
  </ScrollReveal>
);

const DocsContent = () => {
  const toggleFAQ = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Can an agent drain my wallet?", a: "No. Protocol-level constraints prevent agents from transferring assets outside of whitelisted smart contracts or exceeding pre-defined spending limits." },
    { q: "What happens if an LLM hallucinates?", a: "The Neural Control Layer performs static analysis on proposed bytecode. If the proposed action is semantically invalid or deviates from your risk profile, the transaction is completely rejected before it reaches the execution protocol." },
    { q: "How is cross-chain execution handled?", a: "LAYER-X utilizes a decentralized network of intention relayers that securely bridge the agent's logic across Layer 2s and Solana simultaneously without requiring multiple user signatures." },
    { q: "Where do $X tokens fit in?", a: "$X is required as neural fuel for the execution engine, and is burned proportionately based on computational complexity. Protocol operators also stake $X as collateral to ensure execution integrity." }
  ];

  return (
    <section className="px-6 py-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-32 border-l border-white/5 pl-6 space-y-6">
            <div className="text-[10px] font-headline font-bold tracking-widest uppercase text-on-surface/40">Contents</div>
            <nav className="flex flex-col gap-4 text-sm font-headline tracking-wider text-on-surface/60">
              <a href="#overview" className="hover:text-primary transition-colors">Overview</a>
              <a href="#how-it-works" className="hover:text-primary transition-colors">How Agents Work</a>
              <a href="#permissions" className="hover:text-primary transition-colors">Permission Model</a>
              <a href="#security" className="hover:text-primary transition-colors">Security</a>
              <a href="#faqs" className="hover:text-primary transition-colors">FAQs</a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-3xl">
          
          <ContentSection title="What is LAYER-X?" id="overview">
            <p className="text-lg text-on-surface/90">
              LAYER-X is a decentralized execution environment that bridges the gap between Large Language Models (LLMs) and on-chain action. 
              It provides a cryptographic permission framework allowing users to grant autonomous agents specific, tightly-bounded financial capabilities.
            </p>
            <InteractiveCard className="mt-8">
               <div className="p-6 bg-surface/30 border border-primary/10 rounded-lg flex items-start gap-4">
                 <Cpu className="w-5 h-5 text-primary shrink-0 mt-1" />
                 <div>
                   <h4 className="text-on-surface font-headline font-semibold mb-2">The Core Philosophy</h4>
                   <p className="text-sm">Intelligence without agency is just analysis. Agency without constraints is dangerous. We provide the infrastructure for safe, sovereign agency.</p>
                 </div>
               </div>
            </InteractiveCard>
          </ContentSection>

          <ContentSection title="How Agents Work" id="how-it-works">
            <p>
              The execution pipeline transforms natural language strategy into deterministic blockchain state changes through four distinct phases:
            </p>
            <div className="space-y-4 mt-8">
              {[
                { step: "1", title: "Intent Generation", desc: "The user's chosen AI model analyzes market conditions and determines an optimal strategy." },
                { step: "2", title: "Neural Compilation", desc: "The intent is routed through the Neural Control Layer, compiling the natural language into executable EVM/SVM bytecode." },
                { step: "3", title: "Static Analysis", desc: "Before signing, the permission engine validates the bytecode against the user's explicit cryptographic constraints." },
                { step: "4", title: "Atomic Execution", desc: "The validated payload is broadcast via our proprietary mempool infrastructure for immediate inclusion." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                   <div className="w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center shrink-0 font-headline text-xs text-primary font-bold">
                     {item.step}
                   </div>
                   <div>
                     <h4 className="text-on-surface font-headline font-semibold mb-1">{item.title}</h4>
                     <p className="text-sm text-on-surface-variant">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </ContentSection>

          <ContentSection title="Permission Model" id="permissions">
            <p>
              The LAYER-X Permission Model is a set of smart contracts that wrap the agent's multi-signature wallet. These constraints cannot be bypassed by the AI, the protocol operators, or external attackers.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
               {[
                 "Asset Whitelists",
                 "Protocol Blacklists",
                 "Per-Transaction Spending Limits",
                 "Daily Execution Frequency Caps"
               ].map((item, i) => (
                 <div key={i} className="px-4 py-3 bg-surface/50 border border-white/5 rounded-md flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item}</span>
                 </div>
               ))}
            </div>
          </ContentSection>

          <ContentSection title="Security & Safeguards" id="security">
            <p>
              Autonomous financial action requires military-grade security mechanisms to prevent catastrophic failure in the event of unpredictable systemic events or AI hallucinations.
            </p>
            <InteractiveCard className="mt-8">
               <div className="relative overflow-hidden rounded-xl border border-red-500/20 bg-red-500/5 p-8">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldAlert className="w-32 h-32 text-red-500" />
                  </div>
                  <h4 className="text-red-400 font-headline font-bold text-lg mb-2 relative z-10 flex items-center gap-2">
                    <Lock className="w-5 h-5" /> The Dead-Switch Mechanism
                  </h4>
                  <p className="text-sm text-on-surface-variant relative z-10 leading-relaxed max-w-xl">
                    Every deployment features a unified panic button. If unusual activity is detected, the user can invoke a single cryptographic signature that instantly revolves all agent allowances, halts open transactions via Flashbots, and locks the proxy treasury.
                  </p>
               </div>
            </InteractiveCard>
          </ContentSection>

          <ContentSection title="Frequently Asked Questions" id="faqs">
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                 <div key={i} className="border border-white/5 bg-surface/30 rounded-lg overflow-hidden transition-colors hover:border-white/10">
                   <button 
                     onClick={() => toggleFAQ(i)}
                     className="w-full px-6 py-4 flex justify-between items-center text-left"
                   >
                     <span className="font-headline font-medium text-on-surface">{faq.q}</span>
                     <ChevronDown className={`w-4 h-4 text-on-surface/50 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                   </button>
                   <AnimatePresence>
                     {openFaq === i && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.3 }}
                       >
                         <div className="px-6 py-4 border-t border-white/5 text-sm text-on-surface-variant leading-relaxed">
                           {faq.a}
                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               ))}
            </div>
          </ContentSection>

        </div>
      </div>
    </section>
  );
};

export default function DocsPage() {
  return (
    <div className="bg-background">
      <DocsHero />
      <DocsContent />
    </div>
  );
}
