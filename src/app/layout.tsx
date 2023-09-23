import './globals.css';
import {Inter} from 'next/font/google';
import {ReactNode} from "react";

const inter = Inter({subsets: ['latin'] })

export const metadata = {
  title: 'It\'s pronounced "sweet"',
  description: 'A Czech developer\'s guide to the pronunciation of the most problematic IT word – "suite".',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
