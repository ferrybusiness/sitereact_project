import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.className}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

