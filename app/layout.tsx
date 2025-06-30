import { ReactNode } from 'react';
import './globals.css';
import QueryProvider from './providers/QueryProvider';

interface QueryProviderProps{
  children: ReactNode;
}

export const metadata = {
  title: 'Costa Movie App',
  description: 'A simple movie app built with Next.js',
};

export default function RootLayout({ children }: QueryProviderProps) {
  return (
    <html lang='en'>
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}