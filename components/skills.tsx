'use client'

import { CameraIcon, Clapperboard, Palette, PaletteIcon, Smartphone, Video } from 'lucide-react'
import { useEffect, useRef } from 'react'

const skills = [
  {
    num: '01',
    icon: <Smartphone className="w-8 h-8" />,
    name: 'Social Media',
    highlight: 'Social Media',
    rest: 'Management',
    desc: 'Data-driven strategy, community engagement, and aesthetic grid curation to drive organic growth.',
    delay: '0s',
  },
  {
    num: '02',
    icon: <Clapperboard className="w-8 h-8" />,
    name: 'Content Creation',
    highlight: 'Content Creation',
    rest: '& Editing',
    desc: 'Mastering the rhythm of motion through advanced post-production, color grading, and trend-focused content.',
    delay: '0.1s',
  },
  {
    num: '03',
    icon: <CameraIcon className="w-8 h-8" />,
    name: 'Photography',
    highlight: 'Photography',
    rest: '& Videography',
    desc: 'High-fidelity visual storytelling, specializing in product shoots, lifestyle portraits, and cinematic short-form video.',
    delay: '0.2s',
  },
  {
    num: '04',
    icon: <PaletteIcon className="w-8 h-8" />,
    name: 'Graphic Design',
    highlight: 'Graphic Design',
    rest: '& Branding',
    desc: 'Crafting unique visual identities, logo designs, and high-impact marketing materials that capture attention.',
    delay: '0.3s',
  },
]

export function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-20 px-6 md:py-[120px] md:px-14 bg-[var(--bg)] relative overflow-hidden"
    >
      <div className="text-center mb-16 md:mb-20">
        <div className="reveal section-label-animate inline-block text-[11px] tracking-[0.25em] uppercase text-[var(--yellow)] mb-5 font-medium">
          What I Do
        </div>
        <h2 className="reveal section-h2-animate font-syne text-[clamp(36px,5vw,68px)] font-extrabold leading-none tracking-[-0.02em]">
          My Personal <span className="text-[var(--yellow)]">Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[var(--border)] border border-[var(--border)] rounded-lg overflow-hidden">
        {skills.map((skill) => (
          <div
            key={skill.num}
            className="skill-card reveal skill-card-animate bg-[var(--bg2)] p-8 md:p-12 lg:py-12 lg:px-9 flex flex-col gap-5 relative overflow-hidden group hover:bg-[var(--green)] transition-colors duration-300"
            style={{ transitionDelay: skill.delay }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--yellow)] scale-x-0 origin-left transition-transform duration-[400ms] ease-out group-hover:scale-x-100" />
            
            <div className="font-syne text-[11px] tracking-[0.2em] text-[var(--yellow)] uppercase opacity-60">
              {skill.num}
            </div>
            
            <div className="text-[32px]">{skill.icon}</div>
            
            <div className="font-syne text-[18px] font-bold leading-[1.2]">
              <span className="text-[var(--yellow)]">{skill.highlight}</span> {skill.rest}
            </div>
            
            <div className="text-[14px] text-[var(--muted)] leading-[1.6]">
              {skill.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
