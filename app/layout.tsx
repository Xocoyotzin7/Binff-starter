import type React from "react"
import type { Metadata } from "next"
import { Fraunces, Inter } from "next/font/google"

import { SiteFooter } from "@/components/core/site-footer"
import { SiteHeader } from "@/components/core/site-header"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aída Maestro | Photographer",
  description:
    "Aída Maestro is a professional editorial and commercial photographer creating quiet, considered imagery for brands, portraits, and campaigns.",
  applicationName: "Aída Maestro Photography",
  keywords: [
    "photography",
    "editorial photography",
    "portrait photography",
    "commercial photography",
    "photographer landing page",
  ],
  authors: [{ name: "Aída Maestro", url: "https://aida-maestro.com" }],
  creator: "Aída Maestro",
  publisher: "Aída Maestro Photography",
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="relative isolate bg-background text-foreground antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
