import type { Metadata } from 'next'
import { RootProvider } from 'next-docs-ui/provider'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import type { ReactNode } from 'react'
import './globals.css'

const inter = Inter({
  subsets: ['latin']
})

export const metadata = {
  title: {
    template: '%s | nuqs',
    default: 'nuqs'
  },
  description:
    'Type-safe search params state management for Next.js. Like React.useState, but stored in the URL query string.',
  authors: [
    {
      name: 'François Best',
      url: 'https://francoisbest.com'
    }
  ]
} satisfies Metadata

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <RootProvider>{children}</RootProvider>
        <Script
          async
          id="chiffre:analytics"
          src="https://chiffre.io/analytics.js"
          data-chiffre-project-id="odWoaH0aUUwm42Wf"
          data-chiffre-public-key="pk.3EPMj_faODyzisb0UNmZnzhIkG9sbj7zR5em6lf7Olk"
          referrerPolicy="origin"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}