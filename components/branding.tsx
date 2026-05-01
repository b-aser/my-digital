'use client'

import { CoffeeIcon, ExpandIcon, MonitorIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const brandProjects = [
  {
    num: '01',
    icon: <CoffeeIcon className="w-8 h-8" />,
    label: 'Project 01',
    name: 'Meti Coffee',
    image: '/brand_meti.jpg',
    desc: 'Coffee shop branding using earth tones and circular geometry. A warm, artisanal visual identity built for community.',
    delay: '0s',
  },
  {
    num: '02',
    icon: <MonitorIcon className="w-8 h-8" />,
    label: 'Project 02',
    name: 'My Digital Logo',
    image: '/My_Digital_Logo_1.jpg',
    desc: 'Digital branding for a personal brand. A modern, clean, and minimalist aesthetic. Professional, inviting, and distinctly memorable. ',
    delay: '0.15s',
  },
]

export function Branding() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => {
      reveals?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section
      id="branding"
      ref={sectionRef}
      className="py-20 px-6 md:py-[120px] md:px-14 bg-[var(--bg)]"
    >
      <div className="reveal section-label-animate text-[11px] tracking-[0.25em] uppercase text-[var(--yellow)] mb-5 font-medium">
        Graphic Design
      </div>
      
      <h2 className="reveal section-h2-animate font-syne text-[clamp(36px,5vw,68px)] font-extrabold leading-none tracking-[-0.02em]">
        Branding & <span className="text-[var(--yellow)]">Visual Identity</span>
      </h2>
      
      <p className="reveal about-bio-animate text-base text-[var(--muted)] leading-[1.8] max-w-[480px] mt-6">
        Beyond digital strategy, I specialize in building visual foundations for businesses — cohesive brand identities that translate a company&apos;s values into professional, high-impact logos and visual systems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] mt-16 md:mt-20 rounded-lg overflow-hidden">
        {brandProjects.map((project) => (
          <div
            key={project.num}
            className="brand-card reveal brand-card-animate bg-[var(--bg2)] p-10 md:p-16 md:px-14 relative overflow-hidden group hover:bg-[var(--green)] transition-colors duration-300"
            style={{ transitionDelay: project.delay }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="icon-sm"
                  variant="outline"
                  className="absolute top-12 right-6 z-[2] border-[var(--border)] bg-[rgba(10,16,8,0.75)] text-[var(--yellow)] hover:bg-[rgba(10,16,8,0.95)]"
                  aria-label={`Expand ${project.name} logo`}
                >
                  <ExpandIcon className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent
                className="max-w-[96vw] w-[96vw] h-[82vh] bg-[var(--bg)] border-[var(--border)] p-3"
                showCloseButton
              >
                <DialogTitle className="sr-only">{project.name} logo preview</DialogTitle>
                <DialogDescription className="sr-only">
                  Full screen preview of the {project.name} logo.
                </DialogDescription>
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} logo full screen preview`}
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </DialogContent>
            </Dialog>
            <Image
              src={project.image}
              alt={`${project.name} brand visual`}
              fill
              className="object-cover object-center opacity-[0.7] transition-opacity duration-300 group-hover:opacity-[1]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,8,0.7)_0%,rgba(10,16,8,0.9)_50%)] hover:bg-[linear-gradient(180deg,rgba(10,16,8,0.2)_0%,rgba(10,16,8,0.7)_50%)]" />
            {/* Background number */}
            <div className="absolute top-6 right-8 font-syne text-[60px] md:text-[80px] font-extrabold text-[rgba(245,193,0,0.07)] leading-none z-[1]">
              {project.num}
            </div>
            
            <div className="w-16 h-16 md:w-[72px] md:h-[72px] bg-[var(--green2)] rounded-xl flex items-center justify-center text-[28px] md:text-[32px] mb-8 border border-[var(--border)] relative z-[1]">
              {project.icon}
            </div>
            
            <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--yellow)] mb-4 relative z-[1]">
              {project.label}
            </div>
            
            <div className="font-syne text-[28px] md:text-[36px] font-extrabold mb-4 relative z-[1]">
              {project.name}
            </div>
            
            <div className="text-[15px] text-[var(--muted)] leading-[1.7] max-w-[360px] relative z-[1]">
              {project.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
