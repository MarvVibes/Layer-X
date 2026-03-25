import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionTemplate } from 'motion/react';

// --- Global Interactive Cursor ---
export const GlobalCursorGlow = () => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 mix-blend-screen"
      style={{
        background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,107,0,0.03), transparent 60%)`
      }}
    />
  );
};

// --- Reusable Interactive Card ---
export const InteractiveCard = ({ children, className = "", ...props }: React.ComponentProps<"div">) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 400, damping: 30 });
  const y = useSpring(0, { stiffness: 400, damping: 30 });
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mX = e.clientX - rect.left;
    const mY = e.clientY - rect.top;
    
    mouseX.set(mX);
    mouseY.set(mY);

    const xPct = mX / width - 0.5;
    const yPct = mY / height - 0.5;
    
    x.set(xPct * 12); 
    y.set(-(yPct * 12)); 
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    mouseX.set(-1000); // move glow offscreen
    mouseY.set(-1000);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...(props as any)}
      style={{
        rotateX: y,
        rotateY: x,
        transformStyle: "preserve-3d",
        ...(props.style as any)
      }}
      className={`group relative overflow-visible ${className}`}
    >
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-screen"
        style={{
          background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255,107,0,0.15), transparent 80%)`
        }}
      />
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full drop-shadow-2xl">
        {children}
      </div>
    </motion.div>
  );
};

// --- Reusable ScrollReveal ---
export const ScrollReveal = ({ children, className = "", ...props }: React.ComponentProps<"div">) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
};
