import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const cursorRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    let x = -100
    let y = -100

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`
      }
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <svg
      ref={cursorRef}
      className={styles.cursor}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* No-tail arrowhead — clean kite/diamond pointer like Figma's selection cursor */}
      <path
        d="M2 2L14 8L8 10L6 16L2 2Z"
        fill="var(--color-brand-primary)"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
