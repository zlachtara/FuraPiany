"use client"

import { useActionState } from "react"
import { Phone, Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { sendContactEmail, type ContactFormState } from "@/app/actions/send-email"

const initialState: ContactFormState = { success: false, error: null }

export function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState)

  return (
    <section id="kontakt" className="bg-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Kontakt
            </p>
            <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-background sm:text-4xl">
              Skontaktuj się z nami
            </h2>
            <p className="mt-4 text-base leading-relaxed text-background/70">
              Chcesz odświeżyć wnętrze auta lub przywrócić blask lakierowi? Skontaktuj się z nami
              – Fura Piany zrobi resztę!
            </p>

            <div className="mt-8 space-y-6">
              <a
                href="tel:+48517435296"
                className="flex items-center gap-4 text-background/80 transition-colors hover:text-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-background/50">Telefon</p>
                  <p className="font-medium text-background">+48 517 435 296</p>
                </div>
              </a>
              <a
                href="mailto:jaroslaw.kamin@onet.pl"
                className="flex items-center gap-4 text-background/80 transition-colors hover:text-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-background/50">E-mail</p>
                  <p className="font-medium text-background">jaroslaw.kamin@onet.pl</p>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-background/10 bg-background/5 p-6 sm:p-8">
            {state.success ? (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-background">
                  Wiadomość wysłana!
                </h3>
                <p className="mt-2 text-background/60">
                  Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
                </p>
              </div>
            ) : (
              <form action={formAction} className="space-y-5">
                {state.error && (
                  <div className="flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-sm text-red-400">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {state.error}
                  </div>
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-background/80">
                      Imię
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jan"
                      required
                      disabled={isPending}
                      className="border-background/10 bg-background/5 text-background placeholder:text-background/30 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-background/80">
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+48 000 000 000"
                      required
                      disabled={isPending}
                      className="border-background/10 bg-background/5 text-background placeholder:text-background/30 focus-visible:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-background/80">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jan@example.com"
                    disabled={isPending}
                    className="border-background/10 bg-background/5 text-background placeholder:text-background/30 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-background/80">
                    Wiadomość
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Opisz czego potrzebujesz..."
                    rows={4}
                    required
                    disabled={isPending}
                    className="border-background/10 bg-background/5 text-background placeholder:text-background/30 focus-visible:ring-primary"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Wyślij wiadomość
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
