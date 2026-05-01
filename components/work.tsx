'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const projects = [
  {
    num: '01',
    title: 'Batu Review',
    meta: 'Self-Started Digital Brand · Content Creation · Social Media',
    image: '/Batu_social_media.jpg',
    stats: [
      { num: '4K+', label: 'Followers' },
      { num: '50K+', label: 'Likes' },
    ],
    delay: '0s',
  },
  {
    num: '02',
    title: 'Yisak Shoes Store',
    meta: 'Retail Brand Management · TikTok Growth · Videography',
    image: '/Yisak_Socila_Media.jpg',
    stats: [
      { num: '12.6K+', label: 'Followers' },
      { num: '68.9K+', label: 'Likes' },
    ],
    delay: '0.15s',
  },
  {
    num: '03',
    title: 'Social Media Strategy',
    meta: 'Full-Scale Account Growth · Community Engagement · Analytics',
    image: '/hero_bg.jpg',
    stats: [
      { num: '∞', label: 'Growth' },
    ],
    delay: '0.3s',
  },
]

export function Work() {
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
      id="work"
      ref={sectionRef}
      className="py-20 px-6 md:py-[120px] md:px-14 bg-[var(--bg2)]"
    >
      <div className="mb-16 md:mb-20">
        <div className="reveal section-label-animate text-[11px] tracking-[0.25em] uppercase text-[var(--yellow)] mb-5 font-medium">
          Portfolio
        </div>
        <h2 className="reveal section-h2-animate font-syne text-[clamp(36px,5vw,68px)] font-extrabold leading-none tracking-[-0.02em]">
          My Work <span className="text-[var(--yellow)]">Experience</span>
        </h2>
      </div>

      <div className="flex flex-col gap-[1px] bg-[var(--border)] rounded-lg overflow-hidden">
        {projects.map((project) => (
          <div
            key={project.num}
            className="project-row reveal project-row-animate grid grid-cols-1 md:grid-cols-[80px_minmax(0,1fr)_220px_auto] items-center gap-4 md:gap-8 bg-[var(--bg2)] p-6 md:p-10 md:px-12 border-l-[3px] border-transparent hover:bg-[var(--green)] hover:border-l-[var(--yellow)] transition-all duration-300 group relative overflow-hidden"
            style={{ transitionDelay: project.delay }}
          >
            <Image
              src={project.image}
              alt={`${project.title} project visual`}
              fill
              className="object-cover object-center opacity-0 transition-opacity duration-300 group-hover:opacity-10"
            />
            <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(90deg,rgba(10,16,8,0.92)_0%,rgba(10,16,8,0.86)_50%,rgba(10,16,8,0.92)_100%)]" />
            <div className="font-syne text-[24px] md:text-[40px] font-extrabold text-[rgba(245,193,0,0.15)] leading-none relative z-[1]">
              {project.num}
            </div>
            
            <div className="relative z-[1]">
              <div className="font-syne text-[22px] md:text-[28px] font-extrabold tracking-[-0.01em] mb-2">
                {project.title}
              </div>
              <div className="text-[13px] text-[var(--muted)] tracking-[0.05em]">
                {project.meta}
              </div>
            </div>

            <div className="relative z-[1] w-full">
              <div className="relative h-[140px] md:h-[120px] rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--green2)]">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(10,16,8,0.35)_100%)]" />
              </div>
            </div>
            
            {/* Stats - Hidden on mobile */}
            <div className="hidden md:flex gap-8 relative z-[1]">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="text-right">
                  <div className="font-syne text-[28px] font-extrabold text-[var(--yellow)]">
                    {stat.num}
                  </div>
                  <div className="text-[11px] text-[var(--muted)] tracking-[0.1em] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
              
              <div className="w-12 h-12 border border-[var(--border)] rounded-full flex items-center justify-center text-[18px] text-[var(--yellow)] transition-all duration-300 shrink-0 group-hover:bg-[var(--yellow)] group-hover:text-[#0a1008] group-hover:rotate-45">
                →
              </div>
            </div>

            {/* Mobile stats */}
            <div className="flex flex-wrap md:hidden gap-6 mt-2 relative z-[1]">
              {project.stats.map((stat, idx) => (
                <div key={idx}>
                  <span className="font-syne text-[18px] font-extrabold text-[var(--yellow)]">{stat.num}</span>
                  <span className="text-[11px] text-[var(--muted)] tracking-[0.1em] uppercase ml-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
