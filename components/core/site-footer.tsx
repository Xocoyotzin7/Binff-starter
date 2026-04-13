const MAIN_EMAIL = "y@criptec.io"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/55 px-4 py-10 text-sm text-muted-foreground sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-foreground font-semibold">Aída Maestro</p>
          <a
            href={`mailto:${MAIN_EMAIL}`}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
          >
            {MAIN_EMAIL}
          </a>
        </div>

        <p className="max-w-2xl leading-7 text-muted-foreground">
          A simple landing page for Aída Maestro — professional photography with a polished visual tone and direct email booking.
        </p>

        <p className="text-xs text-white/40">© {new Date().getFullYear()} Aída Maestro. All rights reserved.</p>
      </div>
    </footer>
  )
}
