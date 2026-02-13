import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'

import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Operation: Sage Heart - A Valentine Proposal',
  description: 'A romantic gaming-inspired Valentine\'s Day proposal experience',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ '--font-geist': geist.style.fontFamily, '--font-playfair': playfair.style.fontFamily } as React.CSSProperties}>
      <body className="font-sans antialiased bg-gradient-to-br from-background via-secondary to-background min-h-screen">{children}</body>
    </html>
  )
}
