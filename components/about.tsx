'use client'

import { CameraIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function About() {
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
      id="about"
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-screen"
    >
      {/* Visual Side */}
      <div className="relative bg-[var(--green)] flex items-center justify-center overflow-hidden min-h-[320px] md:min-h-full order-2 md:order-1">
        
        {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,8,0.35)_0%,rgba(10,16,8,0.65)_100%)]" /> */}
        <div className="absolute top-5 left-5 font-syne text-[11px] tracking-[0.15em] text-[var(--yellow)] uppercase opacity-60">
          Mikiyas Daniel
        </div>
        
        {/* <div className="w-[240px] h-[300px] md:w-[280px] md:h-[360px] rounded-lg bg-gradient-to-br from-[var(--green2)] to-[#2a5a2e] border border-[var(--border)] flex flex-col items-center justify-center gap-4 relative overflow-hidden">
          <div className="text-6xl opacity-30"><CameraIcon className="w-8 h-8" /></div>
          <div className="font-display text-[13px] font-bold tracking-[0.1em] uppercase text-[var(--yellow)] opacity-70">
            Mikiyas Daniel
          </div>
        </div> */}
        <Image
          src="/about_photo.jpg"
          alt="Mikiyas Daniel portrait"
          fill
          className="object-cover object-center opacity-[0.5]"
        />
        {/* Accent circles */}
        <div className="absolute -bottom-[60px] -right-[60px] w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-[rgba(245,193,0,0.1)]" />
        <div className="absolute -bottom-[100px] -right-[100px] w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-[rgba(245,193,0,0.05)]" />
      </div>

      {/* Content Side */}
      <div className="py-16 px-6 md:py-[120px] md:px-[72px] flex flex-col justify-center bg-[var(--bg2)] order-1 md:order-2">
        <div className="reveal section-label-animate text-[11px] tracking-[0.25em] uppercase text-[var(--yellow)] mb-5 font-medium">
          Hello, I&apos;m
        </div>
        
        <h2 className="reveal section-h2-animate font-syne text-[clamp(36px,5vw,68px)] font-extrabold leading-none tracking-[-0.02em] mb-7">
          Mikiyas<br />
          <span className="text-[var(--yellow)]">Daniel</span>
        </h2>
        
        <p className="reveal about-bio-animate text-base text-[var(--muted)] leading-[1.8] max-w-[480px]">
          I am a multi-disciplinary creator who bridges the gap between artistic vision and digital strategy. By combining high-end photography and video editing with data-driven social media management, I help brands tell stories that don&apos;t just look good — they perform.
        </p>
      </div>
    </section>
  )
}
