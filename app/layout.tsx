import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@/components/analytics';

export const metadata: Metadata = {
  other: { 'page-type': 'service', 'site-kind': 'other' },
  metadataBase: new URL('https://portfolio.patricklai.workers.dev'),
  title: 'Patrick Lai | Full-Stack Web Developer',
  description: 'Full-stack web development with Vue, React, Next.js, Node.js, and Python. Explore Patrick Lai’s work across interfaces, APIs, databases, testing, and deployment.',
  openGraph: { title: 'Patrick Lai | Full-Stack Web Developer', description: 'Custom web applications with Vue, React, Next.js, Node.js, and Python. From responsive interfaces to APIs, databases, and deployment.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-type="service"><body>{children}<Analytics/></body></html>;
}
