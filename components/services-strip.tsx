import { Sparkle, SparkleIcon, Star, StarIcon } from "lucide-react"

export function ServicesStrip() {
  const services = [
    <SparkleIcon className="w-4 h-4" />,
    'Content Creation',
    <SparkleIcon className="w-4 h-4" />,
    'Social Media Management',
    <SparkleIcon className="w-4 h-4" />,
    'Graphic Design',
    <SparkleIcon className="w-4 h-4" />,
    'Video Editing',
    <SparkleIcon className="w-4 h-4" />,
    'Photography',
    <SparkleIcon className="w-4 h-4" />,
    'Brand Identity',
  ]

  // Duplicate for seamless loop
  const allServices = [...services, ...services]

  return (
    <div className="bg-[var(--yellow)] py-4 md:py-[18px] overflow-hidden">
      <div className="marquee-animate flex gap-12 md:gap-20 w-max">
        {allServices.map((service, index) => (
          <div
            key={index}
            className="font-display text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase text-[#0a1008] whitespace-nowrap flex items-center gap-2 md:gap-3"
          >
            {service}
            
          </div>
        ))}
      </div>
    </div>
  )
}
