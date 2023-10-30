import './globals.css'
import type { Metadata } from 'next'
import { Lexend_Tera } from 'next/font/google'

const lexendMega = Lexend_Tera({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'antasofa',
  description: 'antasofa\'s portofolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={lexendMega.className}>{children}</body>
    </html>
  )
}
