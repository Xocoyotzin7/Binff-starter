import { HeadingTypewriter } from "@/components/core/heading-typewriter"
import { ScrollReveal } from "@/components/core/scroll-reveal"
import { ServicesFruityShowcase } from "@/components/client/services-fruity-showcase"
import { ServicesEditorialBody, ServicesEditorialIntro, ServicesEditorialPrelude, ServicesLeadPanel } from "@/components/client/services-editorial-content"
import { readLocalizedMdx } from "@/lib/mdx"
import { getSiteCopy, type Locale } from "@/content/client/site-content"

const fruityShowcaseCopy = {
  en: [
    {
      eyebrow: "01 / Product build",
      title: "Web design and mobile app",
      summary: "Custom sites and mobile flows built to feel familiar, fast, and ready for launch.",
      bullets: ["Custom websites", "Mobile-ready flows", "Launch-ready UX"],
    },
    {
      eyebrow: "02 / Visibility",
      title: "Web positioning (SEO) + AIs",
      summary:
        "We structure pages, content, and metadata so Google and AI tools can read the product clearly.",
      bullets: ["Clear pages", "Simple navigation", "AI-readable content"],
    },
    {
      eyebrow: "03 / Systems layer",
      title: "Web3 + IA",
      summary:
        "AI, automation, payments, and Web3 are added only when they strengthen the product.",
      bullets: ["Automation flows", "AI assistants", "Web3 integrations"],
    },
  ],
  fr: [
    {
      eyebrow: "01 / Produit",
      title: "Conception web et app mobile",
      summary: "Des sites sur mesure et des parcours mobiles pensés pour paraître familiers, rapides et prêts au lancement.",
      bullets: ["Sites sur mesure", "Parcours mobile-first", "UX prête au lancement"],
    },
    {
      eyebrow: "02 / Visibilité",
      title: "Positionnement web (SEO) + IA",
      summary:
        "Nous structurons les pages, le contenu et les métadonnées pour que Google et les outils d’IA lisent le produit clairement.",
      bullets: ["Pages claires", "Navigation simple", "Contenu lisible par IA"],
    },
    {
      eyebrow: "03 / Couche système",
      title: "Web3 + IA",
      summary:
        "Nous ajoutons l’IA, l’automatisation, les paiements et le Web3 seulement lorsqu’ils renforcent le produit.",
      bullets: ["Flux d’automatisation", "Assistants IA", "Intégrations Web3"],
    },
  ],
  es: [
    {
      eyebrow: "01 / Producto",
      title: "Web design y mobile app",
      summary: "Sitios a medida y flujos móviles que se sienten familiares, rápidos y listos para lanzar.",
      bullets: ["Sitios a medida", "Flujos mobile-first", "UX lista para lanzar"],
    },
    {
      eyebrow: "02 / Visibilidad",
      title: "Posicionamiento web (SEO) + AIs",
      summary:
        "Ordenamos páginas, contenido y metadatos para que Google y las herramientas de IA lean el producto con claridad.",
      bullets: ["Páginas claras", "Navegación simple", "Contenido legible por IA"],
    },
    {
      eyebrow: "03 / Capa de sistemas",
      title: "Web3 + IA",
      summary:
        "Sumamos AI, automatización, pagos y Web3 solo cuando refuerzan el producto.",
      bullets: ["Flujos de automatización", "Asistentes AI", "Integraciones Web3"],
    },
  ],
} as const

type ServicesPageContentProps = {
  locale: Locale
}

// MIXED: localized service copy comes from the client/site, while the surface system and motion are reusable agency UI.
export function ServicesPageContent({ locale }: ServicesPageContentProps) {
  // CLIENTE_OWNED: service descriptions and cards come from the site's editorial model.
  const copy = getSiteCopy(locale)
  const desktopContextCards = copy.services.cards.slice(0, 4)
  const fruityShowcase = fruityShowcaseCopy[locale]
  const doc = readLocalizedMdx("services", locale) ?? readLocalizedMdx("services", "en")

  if (!doc) return null

  return (
    <main id="services-scope" className="mx-auto w-full max-w-6xl px-4 pb-8 pt-20 sm:px-6 lg:pt-24">
      <HeadingTypewriter scopeSelector="#services-scope" staggerMs={180} />

      <ScrollReveal direction="up" className="mt-0">
        <ServicesEditorialIntro title={doc.title} excerpt={doc.excerpt} />
      </ScrollReveal>

      <ScrollReveal direction="up" className="mt-0">
        <ServicesLeadPanel
          copy={copy.services}
          cards={desktopContextCards}
        />
      </ScrollReveal>

      <ScrollReveal direction="up" className="mt-8">
        <ServicesEditorialPrelude locale={locale} />
      </ScrollReveal>

      <ScrollReveal direction="up" className="mt-8">
        <ServicesFruityShowcase scenes={fruityShowcase} />
      </ScrollReveal>

      <ScrollReveal direction="up" className="mt-8">
        <ServicesEditorialBody locale={locale} />
      </ScrollReveal>
    </main>
  )
}
