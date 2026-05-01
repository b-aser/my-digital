import { CustomCursor } from '@/components/custom-cursor'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ServicesStrip } from '@/components/services-strip'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Work } from '@/components/work'
import { Branding } from '@/components/branding'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <ServicesStrip />
      <About />
      <Skills />
      <Work />
      <Branding />
      <Contact />
      <Footer />
    </>
  )
}
