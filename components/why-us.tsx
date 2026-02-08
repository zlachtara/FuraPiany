import { MapPin, Search, ArrowLeftRight, Beaker, ThumbsUp } from "lucide-react"

const reasons = [
  {
    icon: MapPin,
    title: "Praca u klienta",
    description: "Przyjeżdżamy do Ciebie – nie musisz nigdzie jechać.",
  },
  {
    icon: Search,
    title: "Dokładność i dbałość o detale",
    description: "Każdy centymetr jest traktowany z najwyższą precyzją.",
  },
  {
    icon: ArrowLeftRight,
    title: 'Widoczne efekty „przed i po"',
    description: "Nasze realizacje mówią same za siebie.",
  },
  {
    icon: Beaker,
    title: "Nowoczesne środki i techniki",
    description: "Korzystamy z profesjonalnych produktów i najnowszych metod.",
  },
  {
    icon: ThumbsUp,
    title: "Zadowoleni klienci",
    description: "Setki pozytywnych opinii i powracających klientów.",
  },
]

export function WhyUs() {
  return (
    <section id="dlaczego-my" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Dlaczego my
          </p>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Co nas wyróżnia
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
