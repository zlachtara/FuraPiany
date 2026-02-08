import React from "react"
import { Car, Sparkles, ShieldCheck, Droplets, Package, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PriceItem {
  label: string
  price: string
}

interface PricingCategory {
  icon: React.ElementType
  title: string
  items: PriceItem[]
}

const categories: PricingCategory[] = [
  {
    icon: Car,
    title: "Czyszczenie wnętrza",
    items: [
      { label: "Szybkie – małe auto", price: "150–250 zł" },
      { label: "Szybkie – średnie auto", price: "200–300 zł" },
      { label: "Szybkie – duże / SUV", price: "250–350 zł" },
      { label: "Kompleksowe – małe auto", price: "450–650 zł" },
      { label: "Kompleksowe – średnie auto", price: "550–800 zł" },
      { label: "Kompleksowe – duże / SUV", price: "750–1000+ zł" },
      { label: "Impregnacja skóry", price: "150–500 zł" },
      { label: "Ozonowanie", price: "~100 zł" },
      { label: "Pranie fotela", price: "200–250 zł" },
    ],
  },
  {
    icon: Sparkles,
    title: "Polerka lakieru",
    items: [
      { label: "1 etap", price: "600–1000 zł" },
      { label: "2 etapy", price: "900–1400 zł" },
      { label: "3 etapy", price: "1300–2000 zł" },
      { label: "Pełna korekta", price: "1800+ zł" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Powłoki ceramiczne",
    items: [
      { label: "Ceramika 1 rok", price: "500–900 zł" },
      { label: "Ceramika 2 lata", price: "1200–1600 zł" },
      { label: "Ceramika 3 lata", price: "1600–2600 zł" },
      { label: "Ceramika 4 lata", price: "2000–3200 zł" },
    ],
  },
  {
    icon: Droplets,
    title: "Powłoka elastomerowa (~5 lat)",
    items: [
      { label: "Podstawowa", price: "2200–3200 zł" },
      { label: "Premium", price: "2800–4000 zł" },
    ],
  },
  {
    icon: Package,
    title: "Pakiety: polerka + powłoka",
    items: [
      { label: "1 etap + ceramika 1 rok", price: "1100–1800 zł" },
      { label: "2 etapy + ceramika 2 lata", price: "1800–2700 zł" },
      { label: "3 etapy + ceramika 3 lata", price: "2900–4000 zł" },
      { label: "2 etapy + elastomer 5 lat", price: "3000–4500+ zł" },
    ],
  },
]

export function Pricing() {
  return (
    <section id="cennik" className="bg-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Cennik
          </p>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-background sm:text-4xl">
            Cennik usług – Fura Piany
          </h2>
          <p className="mt-4 text-base leading-relaxed text-background/60">
            Orientacyjne ceny – ostateczna wycena zależy od stanu i wielkości pojazdu
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col rounded-lg border border-background/10 bg-background/5 transition-all duration-300 hover:border-primary/30 hover:bg-background/10"
            >
              <div className="flex items-center gap-3 border-b border-background/10 px-6 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-background">
                  {category.title}
                </h3>
              </div>

              <ul className="flex flex-1 flex-col px-6 py-4">
                {category.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-4 border-b border-dashed border-background/10 py-3 last:border-0"
                  >
                    <span className="text-sm text-background/70">{item.label}</span>
                    <span className="shrink-0 text-sm font-semibold text-primary">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-6 text-sm text-background/50">
            Podane ceny mają charakter orientacyjny. Skontaktuj się z nami po indywidualną wycenę.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#kontakt">
              Zapytaj o wycenę
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
