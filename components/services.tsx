import { Armchair, Car, Sparkles, Paintbrush, ShieldCheck, Lightbulb } from "lucide-react"

const services = [
  {
    icon: Armchair,
    title: "Pranie tapicerki meblowej",
    description:
      "Profesjonalne pranie kanap, foteli i krzeseł u klienta. Usuwamy plamy, zabrudzenia i nieprzyjemne zapachy.",
  },
  {
    icon: Car,
    title: "Pranie tapicerki samochodowej",
    description:
      "Dokładne czyszczenie siedzeń, podsufitki i dywaników samochodowych. Efekt jak nowy.",
  },
  {
    icon: Sparkles,
    title: "Kompleksowe czyszczenie wnętrza",
    description:
      "Pełny detailing wnętrza auta – od deski rozdzielczej po najmniejsze zakamarki.",
  },
  {
    icon: Paintbrush,
    title: "Korekta lakieru",
    description:
      "Usuwanie rys, hologramów i niedoskonałości lakieru. Przywracamy fabryczny blask.",
  },
  {
    icon: ShieldCheck,
    title: "Powłoka ceramiczna",
    description:
      "Aplikacja dwuletniej powłoki ceramicznej chroniącej lakier przed czynnikami zewnętrznymi.",
  },
  {
    icon: Lightbulb,
    title: "Polerowanie reflektorów",
    description:
      "Przywracanie przejrzystości zmatowiałym reflektorom. Lepszy wygląd i bezpieczeństwo.",
  },
]

export function Services() {
  return (
    <section id="uslugi" className="bg-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Nasze usługi
          </p>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-background sm:text-4xl">
            Kompleksowa oferta detailingu
          </h2>
          <p className="mt-4 text-base leading-relaxed text-background/60">
            Od prania tapicerki po aplikację powłok ceramicznych – zajmiemy się wszystkim.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-background/10 bg-background/5 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-background/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-background">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-background/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
