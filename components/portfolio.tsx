import Image from "next/image"

const projects = [
  {
    image: "/images/portfolio-headlights.jpg",
    alt: "Golf VI – polerowanie reflektorów",
    title: "Golf VI – Polerowanie reflektorów",
    description:
      "Golf VI generacji przyjechał na polerowanie reflektorów i szybko przejrzał na oczy 👀😀",
    tags: ["Polerowanie reflektorów"],
  },
  {
    image: "/images/portfolio-interior.jpg",
    alt: "Hyundai Santa Fe – czyszczenie wnętrza",
    title: "Hyundai Santa Fe – Kompleksowe czyszczenie",
    description:
      "Część 1: kompleksowe czyszczenie wnętrza. 20-godzinny dzień pracy na pełnych obrotach!",
    tags: ["Czyszczenie wnętrza", "20h pracy"],
  },
  {
    image: "/images/portfolio-ceramic.jpg",
    alt: "Hyundai Santa Fe – korekta lakieru i powłoka ceramiczna",
    title: "Hyundai Santa Fe – Korekta i ceramika",
    description:
      "Część 2: korekta lakieru i aplikacja dwuletniej powłoki ceramicznej. Efekt powala! ✨🚘",
    tags: ["Korekta lakieru", "Powłoka ceramiczna"],
  },
]

export function Portfolio() {
  return (
    <section id="realizacje" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Realizacje
          </p>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nasze ostatnie projekty
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Zobacz efekty naszej pracy – każdy projekt to indywidualne podejście i maksymalny efekt.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
