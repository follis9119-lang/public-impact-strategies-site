'use client';
import React from 'react';
import Section from '../components/Section';

export default function Page() {
  return (
    <>
      <header className="p-6 border-b flex justify-between items-center">
        <img
          src="/logo-hawk.svg"
          alt="Public Impact Strategies"
          className="h-9 w-9"
        />
        <span className="font-bold">Public Impact Strategies</span>
      </header>

      <Section id="home">
        <h1 className="text-3xl font-bold">
          Empowering public-minded organizations to make measurable impact.
        </h1>
        <p className="mt-3 text-slate-600">
          Outcome-focused, trust-centric marketing & consulting.
        </p>
      </Section>
    </>
  );
}
