'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#work', label: 'Work' },
    { href: '#branding', label: 'Branding' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`
        nav-animate
        fixed top-0 left-0 right-0 z-[100]
        flex items-center justify-between
        px-6 py-5 md:px-14
        transition-all duration-300
        ${isScrolled
          ? 'bg-[rgba(10,16,8,0.92)] backdrop-blur-[16px] border-b border-[var(--border)]'
          : 'bg-gradient-to-b from-[rgba(10,16,8,0.95)] to-transparent backdrop-blur-0'
        }
      `}
    >
      <div className="nav-brand-animate font-display font-syne text-[15px] font-bold tracking-[0.15em] text-[var(--yellow)] uppercase">
        @my_digital
      </div>
      
      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-10">
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className="
              nav-link-animate
              text-[var(--muted)] text-[13px] tracking-[0.08em] uppercase
              no-underline relative
              transition-colors duration-[250ms]
              hover:text-[var(--yellow)]
              after:content-[''] after:absolute after:bottom-[-4px] after:left-0
              after:w-0 after:h-[1px] after:bg-[var(--yellow)]
              after:transition-[width] after:duration-300 after:ease-in-out
              hover:after:w-full
            "
            style={{ animationDelay: `${0.28 + index * 0.08}s` }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="nav-menu-btn-animate md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-[var(--yellow)] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-[var(--yellow)] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-[var(--yellow)] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed top-[72px] left-0 right-0 bg-[rgba(10,16,8,0.98)] backdrop-blur-[16px]
        border-b border-[var(--border)]
        flex flex-col items-center gap-6 py-8
        transition-all duration-300
        ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}
      `}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="
              text-[var(--muted)] text-[14px] tracking-[0.08em] uppercase
              no-underline transition-colors duration-[250ms]
              hover:text-[var(--yellow)]
            "
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
