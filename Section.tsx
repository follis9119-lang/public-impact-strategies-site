import React from 'react';

export default function Section({ id, className = '', children }:{ id?: string, className?: string, children: React.ReactNode }) {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
