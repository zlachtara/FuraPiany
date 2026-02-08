export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <a href="#" className="font-display text-lg font-bold tracking-tight text-foreground">
          Fura<span className="text-primary"> Piany</span>
        </a>
        <p className="mt-2 text-sm text-muted-foreground">
          Profesjonalne czyszczenie i detailing samochodów
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="#o-nas" className="transition-colors hover:text-primary">O nas</a>
          <a href="#uslugi" className="transition-colors hover:text-primary">Usługi</a>
          <a href="#realizacje" className="transition-colors hover:text-primary">Realizacje</a>
          <a href="#kontakt" className="transition-colors hover:text-primary">Kontakt</a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Fura Piany. Wszelkie prawa zastrzeżone.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/60">
          Strona stworzona przez Z.Lachtare
        </p>
      </div>
    </footer>
  )
}
