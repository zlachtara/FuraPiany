import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-car.jpg"
        alt="Profesjonalny detailing samochodu pokrytego pianą"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
          Profesjonalny detailing
        </p>
        <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl">
          Fura Piany – Profesjonalne czyszczenie i detailing samochodów
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-background/60 sm:text-base">
          Detailing wnętrz &bull; Korekta lakieru &bull; Powłoki ceramiczne &bull; Polerowanie reflektorów Pranie tapicerki meblowej i samochodowej u klienta &bull;
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-background/80 sm:text-lg">
          Witajcie! Zajmujemy się kompleksowym czyszczeniem wnętrz aut oraz polerowaniem reflektorów. Pranie tapicerki meblowej i kompleksowe czyszczenie wnętrz aut także u klienta. Usługi wykonujemy bardzo dokładnie i sprawnie. Zapraszamy do kontaktu.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="tel:+48517 435 296">
              <Phone className="mr-2 h-5 w-5" />
              Zadzwoń / Umów usługę
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10 hover:text-background bg-transparent">
            <a href="#kontakt">
              <MessageCircle className="mr-2 h-5 w-5" />
              Napisz do nas
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-12 w-6 rounded-full border-2 border-background/30 p-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
