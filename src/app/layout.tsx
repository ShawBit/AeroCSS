import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  icons: '/images/logo.jpg',
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
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  );
}
