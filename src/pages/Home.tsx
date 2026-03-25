import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Cpu, Shield, Zap, Activity, Layers, Lock, Globe, Network } from 'lucide-react';
import { InteractiveCard, ScrollReveal } from '../components/Shared';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUjRRXbsz3vINW7c5WatofPbUv79qgxbZUBQ6iK-J-evXbmikbxmtHW0L2-8muOnVkaFRIU7vpcSqpw_YleMqI7-3fUOdR418QV2lO7TVAi-pNhvugoRQ72FeL4qYa3oAcB59-u0g_PrPXZ10BspkY-QlfZcAGLyHTd_zp8VIHt_qHAGU1PLot57IwzwUEdIR-VLECghZsgpfXm1WcV94YlY7u-mQ-YFcp4Hewt6u2pZOimED_1YY0fCfTFjiaRryRJijCuPiCzqI" 
          alt="Neural Interface"
          className="w-full h-full object-cover opacity-15 grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />
      </motion.div>

      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            initial={{ x: Math.random() * 100 + '%', y: Math.random() * 100 + '%', opacity: 0 }}
            animate={{ y: ['-20%', '120%'], opacity: [0, 0.4, 0] }}
            transition={{ duration: 3 + Math.random() * 7, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-2 pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[400px] h-[200px] bg-primary/10 blur-[100px] rounded-full translate-y-[-50px]"
        />
        <motion.div 
          animate={{ opacity: [0, 0.2, 0, 0.3, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          className="absolute w-full h-full bg-primary/5"
        />
      </div>

      <motion.div 
        style={{ y: y2, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full cursor-default hover:bg-primary/20 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-headline font-black uppercase tracking-[0.3em] text-primary">Neural Protocol Engaged</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-headline font-bold tracking-tight leading-tight"
          >
            Layer-X <br />
            <span className="text-primary glow-text">Neural Interface</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-body font-normal tracking-tight text-on-surface-variant"
          >
            AI can think. Now it can act.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl text-lg text-on-surface/60 leading-relaxed mx-auto lg:mx-0"
          >
            Secure execution. Programmable permissions. A high-performance control layer for intelligent agents to operate autonomously on-chain.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <button className="group relative bg-primary text-white px-8 py-3 rounded-sm font-headline font-semibold tracking-wide uppercase text-xs overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,107,0,0.2)] hover:shadow-[0_0_40px_rgba(255,107,0,0.3)]">
              <span className="relative z-10">Activate Interface</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
              />
            </button>
            <button className="px-8 py-3 rounded-sm font-headline font-semibold tracking-wide uppercase text-xs border border-primary/20 text-primary hover:bg-primary/5 transition-all">
              Documentation
            </button>
          </motion.div>
        </div>

        <div className="hidden lg:flex flex-col justify-center items-start gap-8 h-[400px] pl-12 preserve-3d">
          <InteractiveCard className="w-64 bg-surface/50 backdrop-blur-md rounded-lg p-1 border border-primary/10 hover:border-primary/40 transition-colors">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="p-5 h-full space-y-4"
            >
              <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                <span className="text-[9px] font-headline font-bold uppercase tracking-widest text-primary">System Status</span>
                <Activity className="w-3 h-3 text-primary animate-pulse" />
              </div>
              <div className="space-y-2 font-headline text-[10px] uppercase tracking-wider text-on-surface/50">
                <div className="flex justify-between"><span>Signal</span> <span className="text-primary">Active</span></div>
                <div className="flex justify-between"><span>Nodes</span> <span className="text-on-surface">1,402 Connected</span></div>
                <div className="flex justify-between"><span>Execution</span> <span className="text-on-surface">Ready</span></div>
              </div>
            </motion.div>
          </InteractiveCard>

          <InteractiveCard className="w-56 ml-12 bg-surface/50 backdrop-blur-md rounded-lg p-1 border border-primary/10 hover:border-primary/40 transition-colors">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="p-4 h-full"
            >
              <div className="text-[8px] font-headline font-bold uppercase tracking-widest text-primary/60 mb-3">Neural Load</div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ['20%', '85%', '60%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full bg-primary shadow-[0_0_10px_#ff6b00]"
                />
              </div>
              <div className="flex justify-between mt-2 text-[8px] font-headline text-on-surface/40 uppercase">
                <span>Processing...</span>
                <span>8.4 GFLOPS</span>
              </div>
            </motion.div>
          </InteractiveCard>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-headline font-bold uppercase tracking-[0.4em] text-on-surface/30">Scroll to Initialize</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/40 to-transparent" />
      </motion.div>
    </section>
  );
};

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-surface-container-lowest relative overflow-hidden border-b border-primary/5">
      <div className="absolute inset-0 scanline opacity-5" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <ScrollReveal className="order-2 md:order-1 relative rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
          <InteractiveCard className="rounded-2xl border border-white/5 bg-surface/30 p-2">
            <img 
              src="/network_agents.png" 
              alt="AI Security Data Paths" 
              className="w-full h-[300px] md:h-[400px] object-cover rounded-xl opacity-90 transition-transform duration-700 group-hover:scale-[1.03]" 
            />
          </InteractiveCard>
        </ScrollReveal>

        <ScrollReveal className="order-1 md:order-2 space-y-8 pl-0 md:pl-8">
          <div className="inline-flex items-center gap-2 text-primary font-headline font-bold uppercase text-[10px] tracking-widest px-4 py-2 bg-primary/5 rounded-sm border border-primary/10">
            <Shield className="w-3 h-3" />
            The Execution Gap
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tight text-on-surface/90 leading-tight">
            AI systems can analyze. <br />
            <span className="text-on-surface glow-text inline-block mt-4">But they cannot execute on-chain safely.</span>
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed">
            Current intelligent systems lack the native infrastructure to hold keys, sign transactions, and manage wealth autonomously. LAYER-X bridges the gap between intelligent thought and verifiable action.
          </p>
          <div className="flex items-center gap-4 pt-4">
             <div className="w-12 h-[1px] bg-primary/40" />
             <span className="text-[10px] font-headline tracking-widest uppercase text-on-surface/50">Secure Autonomous Control</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const ShiftSection = () => {
  return (
    <section className="py-24 md:py-40 px-6 relative overflow-hidden border-b border-primary/5">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <ScrollReveal className="order-1 md:order-1 space-y-8 pr-0 md:pr-8">
          <h3 className="text-3xl md:text-5xl font-headline font-bold tracking-tight leading-tight text-on-surface/90">
            The next users <br />of Web3 will be <br />
            <span className="text-primary glow-text inline-block hover:scale-105 transition-transform cursor-crosshair mt-4">Autonomous Agents</span>
          </h3>
          <p className="text-base text-on-surface-variant leading-relaxed">
            We are entering the era of machine-to-machine economy. LAYER-X provides the trustless interface required for AI to hold keys, sign transactions, and manage wealth without human intervention—all within user-defined guardrails.
          </p>
          <div className="flex items-center gap-4 pt-4">
             <div className="w-12 h-[1px] bg-primary/40" />
             <span className="text-[10px] font-headline tracking-widest uppercase text-on-surface/50">The Intelligence Revolution</span>
          </div>
        </ScrollReveal>

        <ScrollReveal className="order-2 md:order-2 relative rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
          <InteractiveCard className="rounded-2xl border border-white/5 bg-surface/30 p-2">
            <img 
              src="/execution_visual.png" 
              alt="Autonomous Agents Network Execution" 
              className="w-full h-[300px] md:h-[400px] object-cover rounded-xl opacity-90 transition-transform duration-700 group-hover:scale-[1.03]" 
            />
          </InteractiveCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-surface-container-low border-y border-primary/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-24">
          <h2 className="text-2xl md:text-4xl font-headline font-bold tracking-tight mb-4">The Layer-X System Architecture</h2>
          <p className="text-primary uppercase tracking-[0.4em] font-headline text-[10px] font-bold">Military-Grade Protocol Design</p>
        </ScrollReveal>

        <div className="relative grid md:grid-cols-3 gap-8">
          <div className="hidden md:block absolute top-[40%] left-10 right-10 h-[1px] bg-primary/10 -translate-y-1/2 z-0">
            <motion.div 
              animate={{ x: ['-100%', '300%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-1/4 h-full bg-gradient-to-r from-transparent via-primary/60 to-transparent shadow-[0_0_10px_#ff6b00]"
            />
          </div>

          {[
            {
              icon: Cpu,
              title: "Neural Control Layer",
              desc: "The interpretation engine that converts high-level LLM intents into executable bytecode through our proprietary Neural-to-VM mapping.",
              status: "Optimized"
            },
            {
              icon: Shield,
              title: "Permission Engine",
              desc: "Programmable trust constraints. Define specific assets, volumes, and timeframes an agent is authorized to interact with—enforced at the protocol level.",
              status: "Shielded",
              active: true
            },
            {
              icon: Zap,
              title: "Execution Protocol",
              desc: "Ultra-low latency execution layer designed for MEV protection and atomic transaction batching across multiple chains simultaneously.",
              status: "Ready"
            }
          ].map((item, i) => (
            <InteractiveCard key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`w-full h-full p-8 rounded-lg bg-surface flex flex-col justify-between border border-white/5 transition-all duration-300 z-10 hover:border-primary/40 hover:bg-surface-bright shadow-lg backdrop-blur-sm ${item.active ? 'shadow-[0_0_30px_rgba(255,107,0,0.15)] border-primary/30' : ''}`}
              >
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(255,107,0,0.6)]" />
                  </div>
                  <h4 className="text-xl font-headline font-semibold tracking-tight mb-3 text-on-surface">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between border-t border-primary/10 pt-6">
                  <span className="text-[9px] font-headline font-black uppercase text-primary/40 tracking-[0.2em]">Module Status</span>
                  <span className="text-[9px] font-headline font-black uppercase text-primary tracking-[0.2em]">{item.status}</span>
                </div>
                
                <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-l from-transparent via-primary/50 to-transparent"
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i }}
                  />
                </div>
              </motion.div>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  const cases = [
    {
      title: "Autonomous Trading Agents",
      desc: "Enable AI agents to execute complex arbitrage, trend-following, and liquidity provision strategies 24/7 with sovereign custody.",
      icon: Activity,
      size: "col-span-2 md:col-span-2",
      outcome: "+42% Avg ROI Efficiency"
    },
    {
      title: "DAO Treasury Automation",
      desc: "Protocol-to-Protocol automation. Let intelligent agents manage diversification and yield harvesting based on DAO-set rules.",
      icon: Globe,
      size: "col-span-2 md:col-span-1",
      outcome: "Zero-Latency"
    },
    {
      title: "AI Portfolio Management",
      desc: "Hyper-personalized wealth management where your AI agent optimizes for your risk profile in real-time.",
      icon: Layers,
      size: "col-span-2 md:col-span-1",
      outcome: "100% Automated"
    },
    {
      title: "Real-Time Risk Mitigation",
      desc: "Agents can monitor protocol health and move assets to safety instantly when malicious patterns are detected on-chain.",
      icon: Lock,
      size: "col-span-2 md:col-span-2",
      outcome: "<50ms Response"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-16">
          <h2 className="text-2xl md:text-4xl font-headline font-bold tracking-tight">Operational Scenarios</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <InteractiveCard key={i} className={item.size}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="w-full h-full bg-surface border border-white/5 p-8 rounded-lg overflow-hidden transition-all duration-500 group-hover:border-primary/30"
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <item.icon className="w-8 h-8 text-primary/80 mb-6 group-hover:rotate-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(255,107,0,0.5)]" />
                    <h4 className="text-xl md:text-2xl font-headline font-semibold tracking-tight mb-3 text-on-surface">{item.title}</h4>
                    <p className="text-on-surface-variant max-w-sm leading-relaxed text-sm">{item.desc}</p>
                  </div>
                  <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-headline font-bold uppercase text-primary/60 tracking-widest">
                      <span className="w-4 h-[1px] bg-primary/60" />
                      Deployment Ready
                    </div>
                    <span className="text-[10px] font-headline font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-sm border border-primary/20 uppercase tracking-widest self-start md:self-auto shadow-sm">
                      {item.outcome}
                    </span>
                  </div>
                </div>
                
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors pointer-events-none" />
              </motion.div>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const TokenSection = () => {
  const { scrollYProgress } = useScroll();
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <section className="py-32 px-6 bg-surface-container-lowest relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -50, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)', 
            backgroundSize: '60px 60px' 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center relative z-10">
        <ScrollReveal className="md:w-1/2 space-y-10">
          <h2 className="text-3xl md:text-6xl font-headline font-bold tracking-tight leading-tight">
            $X &mdash; Powering <br /><span className="text-primary glow-text">Intelligent Execution</span>
          </h2>
          <p className="text-on-surface/80 text-lg leading-relaxed max-w-lg">
            The $X token is the fuel for the Layer-X Neural Protocol. It orchestrates resource allocation, secures the neural network, and facilitates governance over protocol permissions.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Neural Gas", sub: "Execution fees for actions" },
              { label: "Staking", sub: "Securing validator nodes" },
              { label: "Governance", sub: "Protocol parameter voting" },
              { label: "Deflation", sub: "Burn per compute unit" }
            ].map((item, i) => (
              <InteractiveCard key={i} className="rounded-sm">
                <div className="p-6 h-full bg-surface border border-transparent border-l-2 !border-l-primary/40 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:!border-l-primary transition-colors">
                  <div className="text-sm font-headline font-semibold text-on-surface mb-1">{item.label}</div>
                  <p className="text-xs text-on-surface-variant">{item.sub}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="md:w-1/2 flex justify-center relative cursor-crosshair">
          <div className="relative w-80 h-80 group">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary rounded-full blur-[100px] group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                style={{ rotate: rotate1 }}
                className="absolute w-full h-full border border-primary/30 rounded-full group-hover:border-primary/60 transition-colors"
              >
                <div className="w-3 h-3 bg-primary rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_20px_#ff6b00]" />
              </motion.div>
              <motion.div 
                style={{ rotate: rotate2 }}
                className="absolute w-[80%] h-[80%] border border-primary/20 rounded-full border-dashed group-hover:border-primary/50 transition-colors"
              >
                <div className="w-2 h-2 bg-primary/80 rounded-full absolute -top-1 left-1/2 -translate-x-1/2" />
                <div className="w-2 h-2 bg-primary/80 rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2" />
              </motion.div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[60%] h-[60%] border border-primary/10 rounded-full"
              >
                 <div className="w-1.5 h-1.5 bg-primary/50 rounded-full absolute top-1/2 -right-0.5 -translate-y-1/2" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1, textShadow: "0px 0px 40px rgba(255,107,0,1)" }}
                className="absolute text-[160px] font-headline font-light text-primary glow-text select-none cursor-pointer transition-all duration-300"
              >
                X
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
      className="py-32 md:py-48 px-6 relative overflow-hidden text-center cursor-crosshair group border-t border-primary/10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/20 transition-opacity duration-700 group-hover:opacity-40" />
      
      <motion.div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,107,0,0.15), transparent 60%)`
        }}
        animate={{ opacity: 1 }}
      />
      
      <ScrollReveal className="max-w-4xl mx-auto relative z-10 space-y-12 backdrop-blur-sm p-10 rounded-3xl border border-transparent group-hover:border-primary/10 transition-colors">
        <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tight leading-tight text-on-surface">
          Plug intelligence <br />into execution.
        </h2>
        <p className="text-on-surface-variant text-lg font-headline tracking-widest uppercase">The interface is ready for deployment</p>
        
        <button className="group/btn relative bg-primary text-white px-12 py-4 rounded-sm font-headline font-semibold tracking-wider uppercase text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,107,0,0.3)] hover:shadow-[0_0_80px_rgba(255,107,0,0.6)]">
          <span className="relative z-10 drop-shadow-md">Enter the Interface</span>
          <motion.div 
            className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out"
          />
        </button>
      </ScrollReveal>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ShiftSection />
      <SolutionSection />
      <UseCases />
      <TokenSection />
      <FinalCTA />
    </>
  );
}
