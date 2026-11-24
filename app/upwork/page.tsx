import type { Metadata } from 'next';
import { PortfolioHome } from '@/components/portfolio-home';
export const metadata: Metadata = { title: 'Patrick Lai | Full-Stack Web Developer | Upwork', description: 'Full-stack web development with Vue, React, Next.js, Node.js, and Python. Review Patrick Lai’s project work and discuss your web application on Upwork.' };
export default function UpworkHome() { return <PortfolioHome upworkOnly/>; }
