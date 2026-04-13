import Image from "next/image"

import { ScrollReveal } from "@/components/core/scroll-reveal"

const featuredPhoto = {
  src: "/photos/iguazu.jpeg",
  alt: "Iguazu featured portrait",
}

const galleryPhotos = [
  {
    src: "/photos/rio.jpeg",
    label: "River portrait",
    caption: "A flowing, luminous image with calm editorial energy.",
  },
  {
    src: "/photos/chalten.jpeg",
    label: "Location story",
    caption: "Landscape photography with a sensibility for editorial campaigns.",
  },
  {
    src: "/photos/chipehua.jpeg",
    label: "Portrait narrative",
    caption: "A measured capture that balances character and refined mood.",
  },
  {
    src: "/photos/paine.jpeg",
    label: "Campaign-ready composition",
    caption: "Imagery designed to support premium branding and storytelling.",
  },
  {
    src: "/photos/paineTorres.jpeg",
    label: "Architectural calm",
    caption: "A directional frame with subtle geometry and luminous detail.",
  },
  {
    src: "/photos/peritoMoreno.jpeg",
    label: "Stillness in motion",
    caption: "Quiet energy in every scene, even in wide landscape frames.",
  },
  {
    src: "/photos/puntaCana.jpeg",
    label: "Natural light study",
    caption: "Soft color and honest texture for elevated visual storytelling.",
  },
  {
    src: "/photos/sanBlas.jpeg",
    label: "Editorial palette",
    caption: "A polished frame with warm tones and quiet photographic restraint.",
  },
  {
    src: "/photos/atacama.jpeg",
    label: "Visual rhythm",
    caption: "A cinematic frame that reads as both intimate and expansive.",
  },
]

export function PhotoStoryGallery() {
  return (
    <section id="portfolio" className="mt-20 rounded-[2rem] border border-white/10 bg-black/10 p-6 shadow-[0_40px_120px_-52px_rgba(0,0,0,0.55)] backdrop-blur-xl">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/85">Portfolio</p>
          <h2 className="mt-3 text-4xl font-serif leading-tight tracking-tight text-foreground sm:text-5xl">
            The photographs arrive with the same editorial rhythm as the page.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground/85 sm:text-right">
          Ten curated photos are shown with a slow reveal and refined editorial flow.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.95fr]">
        <ScrollReveal direction="up" delay={0.05} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] shadow-xl">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={featuredPhoto.src}
              alt={featuredPhoto.alt}
              fill
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              priority
            />
          </div>
          <div className="border-t border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/80">Featured</p>
            <h3 className="mt-4 text-3xl font-serif tracking-tight text-foreground">Quiet light portraits with an editorial mood.</h3>
          </div>
        </ScrollReveal>

        <div className="grid gap-6">
          {galleryPhotos.slice(0, 4).map((photo, index) => (
            <ScrollReveal
              key={photo.src}
              direction={index % 2 === 0 ? "right" : "left"}
              delay={0.08 + index * 0.05}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover transition duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground/80">Frame {index + 1}</p>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{photo.caption}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {galleryPhotos.slice(5).map((photo, index) => (
          <ScrollReveal
            key={photo.src}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={0.12 + index * 0.05}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-lg"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover transition duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground/80">Frame {index + 5}</p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{photo.caption}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
