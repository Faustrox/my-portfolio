import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fausto Jáquez - Portfolio',
  description: 'My own portolio created with Next.js and inspired by Ambrox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' data-theme='light'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
