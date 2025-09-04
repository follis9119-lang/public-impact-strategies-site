import type { Metadata } from 'next';
import '/styles/globals.css';

export const metadata: Metadata = {
  title: 'Public Impact Strategies',
  description: 'Outcome-focused, trust-centric marketing & consulting for public-minded organizations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-800">{children}</body>
    </html>
  );
}
