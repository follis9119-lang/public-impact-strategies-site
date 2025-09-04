'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const COLORS = { navy: '#0D1B2A', teal: '#007A8C', orange: '#FF6B1A', cream: '#F5F3EE' };

export default function Page() {
  return (
    <div>
      <header className="p-6 border-b flex justify-between items-center">
        <img src="/logo-hawk.svg" alt="Public Impact Strategies" className="h-9 w-9" />
        <span className="font-bold">Public Impact Strategies</span>
      </header>
      <Section id="home">
        <motion.h1 initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className="text-3xl font-bold">
          Empowering public-minded organizations to make measurable impact.
        </motion.h1>
      </Section>
    </div>
  );
}
