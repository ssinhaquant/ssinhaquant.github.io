import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Snehal Sinha | Quantitative Finance & Research',
  description: 'Snehal Sinha — Georgia Tech MS Quantitative and Computational Finance. Former BlackRock Aladdin Financial Engineering Associate. Portfolio risk, quantitative research, and systematic trading.',
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en" className="dark"><body>{children}</body></html>;
}
