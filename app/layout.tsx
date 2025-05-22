import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Military Service Countdown | Track Your Service Time',
  description:
    'A sleek, responsive countdown timer to track your military service completion. Features real-time updates, dynamic color coding, and milestone tracking.',
  keywords: [
    'military service',
    'countdown',
    'timer',
    'military',
    'service tracking',
    'countdown timer',
  ],
  authors: [{ name: 'Saif Mohamed' }],
  creator: 'Saif Mohamed',
  publisher: 'Saif Mohamed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://military-service-countdown.vercel.app',
    title: 'Military Service Countdown | Track Your Service Time',
    description:
      'A sleek, responsive countdown timer to track your military service completion. Features real-time updates, dynamic color coding, and milestone tracking.',
    siteName: 'Military Service Countdown',
    images: [
      {
        url: '/website.png',
        width: 1200,
        height: 630,
        alt: 'Military Service Countdown Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Military Service Countdown | Track Your Service Time',
    description:
      'A sleek, responsive countdown timer to track your military service completion. Features real-time updates, dynamic color coding, and milestone tracking.',
    images: ['/website.png'],
    creator: '@saifmohamedsv',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
