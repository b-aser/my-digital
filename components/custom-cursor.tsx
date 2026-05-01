'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)
  
  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches)
    }
    checkTouchDevice()
    
    if (isTouchDevice) return
    
    let mx = 0, my = 0, fx = 0, fy = 0
    
    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`
        cursorRef.current.style.top = `${my}px`
      }
    }
    
    const animateFollower = () => {
      fx += (mx - fx) * 0.12
      fy += (my - fy) * 0.12
      if (followerRef.current) {
        followerRef.current.style.left = `${fx}px`
        followerRef.current.style.top = `${fy}px`
      }
      requestAnimationFrame(animateFollower)
    }
    
    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)
    
    document.addEventListener('mousemove', handleMouseMove)
    animateFollower()
    
    const interactiveElements = document.querySelectorAll('a, button, .project-row, .skill-card, .brand-card')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isTouchDevice])
  
  if (isTouchDevice) return null
  
  return (
    <>
      <div 
        ref={cursorRef}
        className={`cursor ${isHovered ? 'hovered' : ''}`}
      />
      <div 
        ref={followerRef}
        className={`cursor-follower ${isHovered ? 'hovered' : ''}`}
      />
    </>
  )
}
