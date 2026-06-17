import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RasoiVerse – India\'s Community Recipe Library',
  description:
    'Discover authentic Indian recipes from every state. Listen to audio-guided instructions, explore regional cuisines, save favorites, and share your family\'s culinary traditions.',
  openGraph: {
    title: 'RasoiVerse – India\'s Community Recipe Library',
    description:
      'Discover authentic Indian recipes from every state. Listen to audio-guided instructions, explore regional cuisines, save favorites, and share your family\'s culinary traditions.',
    url: 'https://rasoiverse.vercel.app',
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
      <body className={`${inter.className} bg-background text-text`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
