import Image from "next/image"
import { HeadingTypewriter } from "@/components/core/heading-typewriter"
import { PhotoStoryGallery } from "@/components/core/magazine-carousel"
import { ScrollReveal } from "@/components/core/scroll-reveal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aída Maestro | Photographer",
  description:
    "Aída Maestro is a professional editorial and commercial photographer creating quiet, considered imagery for brands, portraits, and campaigns.",
  openGraph: {
    title: "Aída Maestro | Photographer",
    description: "Professional editorial and commercial photography with quiet confidence.",
    images: [
      {
        url: "/photos/iguazu.jpeg",
        width: 1200,
        height: 630,
        alt: "Aída Maestro Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aída Maestro | Photographer",
    description: "Professional editorial and commercial photography with quiet confidence.",
    images: ["/photos/iguazu.jpeg"],
  },
}

export default function Home() {
  return (
    <main className="relative mx-auto min-h-screen max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <section id="top" className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Photography</p>
            <h1 className="mt-6 text-5xl font-serif leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Aída Maestro
            </h1>
            <HeadingTypewriter scopeSelector="#top" />
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Editorial and commercial photography with quiet confidence, clear visual direction, and a refined mood for brands,
              portrait work, and editorial stories.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:y@criptec.io"
              className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-foreground/10 px-8 py-4 text-sm font-semibold text-foreground transition hover:border-foreground/30 hover:bg-foreground/15"
            >
              Book a session
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-muted/20 bg-transparent px-8 py-4 text-sm font-semibold text-muted-foreground transition hover:border-foreground/25 hover:text-foreground"
            >
              View work
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_-48px_rgba(0,0,0,0.55)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),transparent_28%)] opacity-70" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#111]">
            <Image
              src="/photos/chalten.jpeg"
              alt="Chalten location portrait"
              fill
              className="object-cover transition duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_24%)]" />
            <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute inset-0 flex items-end justify-start p-8">
              <div className="rounded-[2rem] border border-white/10 bg-black/40 p-8 text-white/90 shadow-xl backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground">Featured</p>
                <p className="mt-4 text-2xl font-semibold tracking-tight">Quiet light portraits with an editorial mood.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mt-24 border-t border-foreground/10 pt-24">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">About</p>
            <h2 className="text-4xl font-serif leading-tight tracking-tight text-foreground sm:text-5xl">
              Aida captures stories that feel polished, intimate, and distinctive.
            </h2>
            <HeadingTypewriter scopeSelector="#about" />
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                Aída Maestro works with editorial teams, brands, and creative directors to produce photography that supports strong narratives and a confident visual tone.
              </p>
              <p>
                Her work balances precise composition with subtle atmosphere, bringing modern elegance to portrait, fashion, and commercial storytelling.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-12 grid gap-4 sm:grid-cols-2" delay={0.2} direction="up">
            {[
              "Editorial stories with refined lighting",
              "Portraits that feel polished and personal",
              "Commercial work designed for art direction",
              "Campaign imagery with calm yet distinct mood",
            ].map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section id="work" className="mt-24 border-t border-foreground/10 pt-24">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Work</p>
            <h2 className="text-4xl font-serif leading-tight tracking-tight text-foreground sm:text-5xl">
              Focused photography for brands, portraits, and editorial commissions.
            </h2>
            <HeadingTypewriter scopeSelector="#work" />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Editorial",
                text: "Stories shot for magazine features, lookbooks, and brand storytelling with cinematic restraint.",
              },
              {
                title: "Portrait",
                text: "Portrait sessions that reveal character and maintain a timeless, editorial quality.",
              },
              {
                title: "Commercial",
                text: "Brand imagery with a refined visual strategy for campaigns, launches, and online presence.",
              },
            ].map((item) => (
              <ScrollReveal key={item.title} className="rounded-[2rem] border border-white/10 bg-black/20 p-8 backdrop-blur-sm" delay={0.15} direction="up">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">{item.title}</p>
                <p className="mt-5 text-base leading-7 text-muted-foreground">{item.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <PhotoStoryGallery />

      <section id="process" className="mt-24 border-t border-foreground/10 pt-24">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Process</p>
            <h2 className="text-4xl font-serif leading-tight tracking-tight text-foreground sm:text-5xl">
              A clear, direct process for every shoot.
            </h2>
            <HeadingTypewriter scopeSelector="#process" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Brief", description: "A concise conversation to define tone, wardrobe, and the look of the project." },
              { title: "Shoot", description: "A calm, detail-oriented session with an editorial approach to light and movement." },
              { title: "Deliver", description: "Finished images prepared for digital, editorial, or campaign use." },
            ].map((item) => (
              <ScrollReveal key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8" delay={0.14} direction="up">
                <p className="text-sm font-semibold uppercase tracking-[0.29em] text-muted-foreground">{item.title}</p>
                <p className="mt-5 text-base leading-7 text-muted-foreground">{item.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mt-24 border-t border-foreground/10 pt-24 pb-36">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Contact</p>
            <h2 className="text-4xl font-serif leading-tight tracking-tight text-foreground sm:text-5xl">
              Let’s discuss your next project.
            </h2>
            <HeadingTypewriter scopeSelector="#contact" />
          </div>

          <ScrollReveal className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-10 text-lg leading-8 text-muted-foreground" delay={0.2} direction="up">
            <p>
              The strongest way to start is by email. Tell me about your idea, the shoot format, and your timeline.
            </p>
            <a
              href="mailto:y@criptec.io"
              className="mt-8 inline-flex rounded-full border border-foreground/15 bg-foreground/10 px-8 py-4 text-sm font-semibold text-foreground transition hover:border-foreground/30 hover:bg-foreground/15"
            >
              y@criptec.io
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
