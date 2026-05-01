export function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] py-6 px-6 md:py-8 md:px-14 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
      <div className="font-syne text-[13px] font-bold tracking-[0.15em] text-[var(--yellow)] uppercase">
        @miky_media
      </div>
      <div className="text-[12px] text-[var(--muted)] tracking-[0.05em]">
        &copy; {new Date().getFullYear()} Mikiyas Daniel. All rights reserved.
      </div>
    </footer>
  )
}
