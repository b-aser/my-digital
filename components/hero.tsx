import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen px-6 md:px-14 overflow-hidden"
    >
      {/* Background Effects */}
      <Image
        src="/hero_bg.jpg"
        alt="Creative portfolio background"
        fill
        priority
        className="hero-image-animate object-cover object-center opacity-20 "
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,#1a3d1e55_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_20%_80%,#f5c10008_0%,transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-[1] max-w-[800px]">
        <div className="hero-tag-animate inline-flex items-center gap-2 bg-[rgba(245,193,0,0.1)] border border-[var(--border)] px-4 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-[var(--yellow)] mb-8">
          <span className="w-1.5 h-1.5 bg-[var(--yellow)] rounded-full pulse-dot" />
          Available for Projects
        </div>
        
        <h1 className="hero-h1-animate font-display text-[clamp(48px,10vw,128px)] font-extrabold leading-[0.9] tracking-[-0.03em]">
          Mikiyas<br />
          <em className="not-italic text-[var(--yellow)] block">Daniel</em>
        </h1>
        
        <p className="hero-sub-animate text-base text-[var(--muted)] leading-[1.7] max-w-[480px] mt-7">
          Multi-disciplinary creator bridging artistic vision and digital strategy. Stories that don&apos;t just look good — they perform.
        </p>
        
        <div className="hero-cta-animate flex gap-4 mt-12 flex-wrap">
          <a
            href="#work"
            className="
              bg-[var(--yellow)] text-[#0a1008]
              font-display font-bold text-[13px] tracking-[0.1em] uppercase
              px-9 py-4 rounded-[4px] no-underline inline-block
              transition-all duration-200
              hover:translate-y-[-2px] hover:bg-[var(--yellow2)] hover:shadow-[0_12px_40px_rgba(245,193,0,0.3)]
            "
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="
              border border-[var(--border)] text-[var(--white)]
              font-display font-semibold text-[13px] tracking-[0.1em] uppercase
              px-9 py-4 rounded-[4px] no-underline inline-block
              transition-all duration-200
              hover:border-[var(--yellow)] hover:text-[var(--yellow)] hover:translate-y-[-2px]
            "
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Handle - Hidden on mobile */}
      <div className="hero-handle-animate absolute right-6 md:right-14 bottom-14 font-syne text-[11px] tracking-[0.25em] text-[var(--muted)] uppercase writing-mode-vertical-rl hidden md:block" style={{ writingMode: 'vertical-rl' }}>
        @mikiyas_daniel — creative portfolio
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <div className="hero-scroll-animate absolute bottom-14 left-6 md:left-14 flex items-center gap-3 text-[11px] tracking-[0.15em] text-[var(--muted)] uppercase hidden md:flex">
        <div className="w-10 h-[1px] bg-[var(--yellow)]" />
        Scroll to explore
      </div>
    </section>
  )
}
