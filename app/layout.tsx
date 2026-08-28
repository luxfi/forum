import type { Metadata } from 'next';
import { Hanzo } from '@hanzo/ui'
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import '@hanzo/ui/theme.css';
import '@hanzo/ui/styles.css';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Lux Forum',
  description: 'Community discussions for Lux Network - share ideas, ask questions, and connect.',
  metadataBase: new URL('https://lux.forum'),
  openGraph: {
    title: 'Lux Forum',
    description: 'Community discussions for Lux Network - share ideas, ask questions, and connect.',
    siteName: 'Lux Forum',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lux Forum',
    description: 'Community discussions for Lux Network - share ideas, ask questions, and connect.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        <Hanzo>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </Hanzo>
      </body>
    </html>
  );
}
