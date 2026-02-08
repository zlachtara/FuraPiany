import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin', 'latin-ext'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Fura Piany – Profesjonalne czyszczenie i detailing samochodów',
  description: 'Pranie tapicerki meblowej i samochodowej u klienta. Detailingowe czyszczenie wnętrz aut, korekta lakieru, powłoki ceramiczne, polerowanie reflektorów.',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${_inter.variable} ${_spaceGrotesk.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
