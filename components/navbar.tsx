"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "O nas", href: "#o-nas" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Cennik", href: "#cennik" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Dlaczego my", href: "#dlaczego-my" },
  { label: "Kontakt", href: "#kontakt" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-display text-xl font-bold tracking-tight text-background">
            Fura<span className="text-primary"> Piany</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-background/70 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="tel:+48517435296">
                <Phone className="mr-2 h-4 w-4" />
                Zadzwoń
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-background md:hidden"
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-background/10 bg-foreground md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-background/70 transition-colors hover:bg-background/5 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="tel:+48000000000">
                  <Phone className="mr-2 h-4 w-4" />
                  Zadzwoń
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
