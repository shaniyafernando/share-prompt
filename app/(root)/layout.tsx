import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import {ClerkProvider} from '@clerk/nextjs'
import { dark } from "@clerk/themes";
import Bottombar from '@/components/shared/Bottombar';
import Leftsidebar from '@/components/shared/Leftsidebar';
import Rightsidebar from '@/components/shared/Rightsidebar';
import Topbar from '@/components/shared/Topbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'threads',
  description: 'A nextjs 14 meta threads application'

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey="pk_test_YXNzdXJlZC1zbmFpbC0wLmNsZXJrLmFjY291bnRzLmRldiQ"
      appearance={{
        baseTheme: dark,
      }}
    >
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <main className='flex flex-row'>
          <Leftsidebar />
          <section className='main-container'>
            <div className='x-full max-w-4xl'>
            {children}
            </div>
          </section>
          <Rightsidebar />
        </main>
        <Bottombar />
        </body>
    </html>
    </ClerkProvider>
  )
}
