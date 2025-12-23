import Header from '@/components/Header';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Photosnap Multi-Page Website',
  description: 'This is a multi-page website for Photosnap',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${dmSans.className} antialiased`}>
        <Header />
        <main className='relative'>{children}</main>
      </body>
    </html>
  );
}
