import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Portfolio } from "@/components/portfolio"
import { WhyUs } from "@/components/why-us"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Portfolio />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
