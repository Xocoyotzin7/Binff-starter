import Link from "next/link"

import { Button } from "@/components/ui/button"
import { NotFoundLeafReveal } from "@/components/client/not-found-leaf-reveal"

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05080c] text-foreground">
      <div className="absolute inset-0">
        <NotFoundLeafReveal />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,125,79,0.14),transparent_38%),radial-gradient(circle_at_80%_18%,rgba(92,181,255,0.1),transparent_26%),linear-gradient(to_bottom,rgba(5,8,12,0.12),rgba(5,8,12,0.72))]" />
      </div>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20 sm:px-6">
        <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.48em] text-[color:var(--accent)]">
              Error 404
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              No encontramos esta página.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-foreground/72 sm:text-lg sm:leading-8">
              La hoja que buscabas no está aquí. Puedes volver al inicio o seguir
              explorando el estudio.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-[color:var(--accent)] px-6 py-6 text-base text-white shadow-lg shadow-[color:var(--accent)]/15 transition-transform hover:scale-[1.03]">
                <Link href="/">Volver al inicio</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-border/60 bg-white/5 px-6 py-6 text-base text-foreground backdrop-blur-sm transition-transform hover:scale-[1.03]">
                <Link href="/services">Ver servicios</Link>
              </Button>
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-border/60 bg-white/5 p-6 shadow-[0_30px_120px_rgba(2,6,23,0.28)] sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,125,79,0.18),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(48,211,159,0.12),transparent_28%),radial-gradient(circle_at_55%_90%,rgba(92,181,255,0.08),transparent_36%)]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-border/60 bg-black/25 px-3 py-1 text-xs font-medium uppercase tracking-[0.32em] text-muted-foreground">
                  Hoja nueva cada 1.5s
                </span>
                <span className="text-xs uppercase tracking-[0.32em] text-[color:var(--accent)]">
                  Studio
                </span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  "Motivo orgánico",
                  "Paleta propia",
                  "Sin hover, solo flujo",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border/60 bg-black/20 p-4 text-sm text-foreground/80 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[1.75rem] border border-border/60 bg-black/45 p-6 text-foreground shadow-inner">
                <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">
                  Señal visual
                </p>
                <p className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                  Una hoja nueva aparece, cae y se integra al fondo.
                </p>
                <p className="mt-4 max-w-md text-sm leading-7 text-foreground/72">
                  El movimiento replica el carácter de la pieza original, pero
                  con una lectura más cercana a la identidad del sitio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
