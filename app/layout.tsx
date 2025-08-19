import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hedamo - Premium Organic Products',
  description: 'Discover premium organic products with complete traceability. Each product tells a story of quality, sustainability, and care.',
  keywords: 'organic, premium, traceability, sustainable, food, honey, olive oil, coffee',
  authors: [{ name: 'Hedamo Team' }],
  openGraph: {
    title: 'Hedamo - Premium Organic Products',
    description: 'Discover premium organic products with complete traceability',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}