import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Whelster Esmade | Web Developer',
    template: '%s | Whelster Esmade',
  },
  description: 'Web Developer specializing in building exceptional digital experiences. Explore my portfolio of web applications and projects.',
  keywords: ['developer', 'portfolio', 'full stack', 'react', 'next.js', 'web development'],
  authors: [{ name: 'Whelster Esmade' }],
  creator: 'Whelster Esmade',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexjohnson.dev',
    siteName: 'Whelster Esmade Portfolio',
    title: 'Whelster Esmade | Web Developer',
    description: 'Web Developer specializing in building exceptional digital experiences.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whelster Esmade | Web Developer',
    description: 'Web Developer specializing in building exceptional digital experiences.',
    creator: '@alexjohnson',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
