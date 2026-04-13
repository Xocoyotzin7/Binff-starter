"use client"

import { Mail } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="pointer-events-auto relative mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 rounded-full border border-white/10 bg-black/60 px-5 py-3 text-sm font-semibold text-white shadow-2xl backdrop-blur-xl">
        <a href="#top" className="text-sm uppercase tracking-[0.35em] text-foreground">
          Aída Maestro
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-black/50 p-2 transition hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-all ${
                menuOpen ? "translate-y-[0.25rem] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-all ${
                menuOpen ? "-translate-y-[0.25rem] -rotate-45" : ""
              }`}
            />
          </button>

          <a
            href="mailto:y@criptec.io"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Email y@criptec.io"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {menuOpen ? (
          <div className="absolute inset-x-5 top-full mt-3 rounded-[2rem] border border-white/10 bg-black/90 p-4 text-sm backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-muted-foreground transition hover:border-white/20 hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
