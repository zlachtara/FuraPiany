import Image from "next/image"

export function About() {
  return (
    <section id="o-nas" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/about-detailing.jpg"
              alt="Detailer pracujący nad samochodem"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5" />
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              O nas
            </p>
            <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Pasja do czystości i perfekcji
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Fura Piany to pasja do czystości i perfekcyjnego wyglądu samochodów. Każde auto traktujemy indywidualnie, dbając o detale i maksymalny efekt wizualny.
              </p>
              <p>
                Pracujemy u nas jak i u klienta, sprawnie i z pełnym zaangażowaniem. Naszym celem jest sprawienie, by każdy pojazd wyglądał jak nowy – zarówno wewnątrz, jak i na zewnątrz.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">100+</p>
                <p className="mt-1 text-sm text-muted-foreground">Zadowolonych klientów</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">3+</p>
                <p className="mt-1 text-sm text-muted-foreground">Lata doświadczenia</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">100%</p>
                <p className="mt-1 text-sm text-muted-foreground">Zaangażowania</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
