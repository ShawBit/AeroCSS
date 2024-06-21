import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AeroCSS',
  description: 'Learning CSS as smooth as a breeze!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
