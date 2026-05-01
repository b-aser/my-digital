import { InstagramIcon, MailIcon, MusicIcon, PhoneIcon, PlaneIcon } from "lucide-react"

const contactLinks = [
  { icon: <PlaneIcon className="w-4 h-4" />, label: 'Telegram', href: '#' },
  { icon: <InstagramIcon className="w-4 h-4" />, label: 'Instagram', href: '#' },
  { icon: <MailIcon className="w-4 h-4" />, label: 'Email', href: '#' },
  { icon: <MusicIcon className="w-4 h-4" />, label: 'TikTok', href: '#' },
  { icon: <PhoneIcon className="w-4 h-4" />, label: 'Phone', href: '#' },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center flex-col text-center py-20 px-6 md:py-[120px] md:px-14 bg-[var(--bg2)] relative overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(245,193,0,0.04)_0%,transparent_70%)]" />
      
      <div className="relative z-[1]">
        <div className="text-[11px] tracking-[0.25em] uppercase text-[var(--yellow)] mb-6">
          Let&apos;s Collaborate
        </div>
        
        <h2 className="font-syne text-[clamp(48px,9vw,120px)] font-extrabold leading-[0.9] tracking-[-0.03em] mb-8">
          Thank<br />
          <em className="not-italic text-[var(--yellow)]">You!</em>
        </h2>
        
        <p className="text-base text-[var(--muted)] max-w-[420px] leading-[1.7] mb-12 md:mb-14 mx-auto">
          Ready to elevate your brand&apos;s digital presence? Let&apos;s create something that doesn&apos;t just look good — it performs.
        </p>
        
        <div className="flex gap-3 md:gap-6 flex-wrap justify-center mb-12 md:mb-16">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                flex items-center gap-2 md:gap-2.5
                bg-[rgba(245,193,0,0.08)] border border-[var(--border)]
                px-4 py-3 md:px-6 md:py-3.5 rounded-full
                text-[12px] md:text-[13px] tracking-[0.08em] uppercase
                text-[var(--white)] no-underline
                transition-all duration-300
                hover:bg-[var(--yellow)] hover:border-[var(--yellow)] hover:text-[#0a1008] hover:translate-y-[-2px]
              "
            >
              <span className="text-[14px] md:text-[16px]">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
        
        <a
          href="#hero"
          className="
            border border-[var(--border)] text-[var(--white)]
            font-syne font-semibold text-[13px] tracking-[0.1em] uppercase
            px-8 py-4 rounded-full no-underline inline-block
            transition-all duration-200
            hover:border-[var(--yellow)] hover:text-[var(--yellow)] hover:translate-y-[-2px]
          "
        >
          Back to Top ↑
        </a>
      </div>
    </section>
  )
}
