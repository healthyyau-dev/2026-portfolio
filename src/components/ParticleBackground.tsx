import { useEffect, useRef } from 'react'
import styles from './ParticleBackground.module.css'

interface Particle {
  x: number
  y: number
  homeX: number
  homeY: number
  vx: number
  vy: number
  size: number
  baseOpacity: number
}

const GRID = 16          // px between particles
const MOUSE_RADIUS = 600 // px influence radius
const REPEL = 7          // max repel distance
const SPRING = 0.09
const DAMPING = 0.78
const GLOW_RADIUS = 320  // soft glow radius
const MOUSE_LERP = 0.12  // cursor lag — lower = more latency

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let mouseX = -9999
    let mouseY = -9999
    // Smoothed cursor position that lags behind the real mouse
    let lerpX = -9999
    let lerpY = -9999
    let animId = 0
    let particles: Particle[] = []

    function build() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height

      particles = []
      const cols = Math.ceil(width / GRID) + 2
      const rows = Math.ceil(height / GRID) + 2
      // offset grid so dots aren't right at the edge
      const offX = ((width % GRID) / 2)
      const offY = ((height % GRID) / 2)

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const hx = offX + c * GRID
          const hy = offY + r * GRID
          particles.push({
            x: hx,
            y: hy,
            homeX: hx,
            homeY: hy,
            vx: 0,
            vy: 0,
            // slight size variation for organic feel
            size: 1,
            baseOpacity: 0.12 + Math.random() * 0.1,
          })
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // Read theme each frame — cheap attribute lookup, keeps canvas in sync with toggles
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light'

      const hasMouseInView = mouseX > -9000

      // Lerp smoothed position toward real mouse each frame
      if (hasMouseInView) {
        if (lerpX < -9000) { lerpX = mouseX; lerpY = mouseY }
        lerpX += (mouseX - lerpX) * MOUSE_LERP
        lerpY += (mouseY - lerpY) * MOUSE_LERP
      } else {
        lerpX = -9999; lerpY = -9999
      }

      // ── Particles ────────────────────────────────────────────────
      for (const p of particles) {
        const dx = p.x - lerpX
        const dy = p.y - lerpY
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Repel when close
        if (hasMouseInView && dist < MOUSE_RADIUS) {
          const t = 1 - dist / MOUSE_RADIUS
          const force = t * t * REPEL
          const angle = Math.atan2(dy, dx)
          p.vx += Math.cos(angle) * force * 0.14
          p.vy += Math.sin(angle) * force * 0.14
        }

        // Spring back to home
        p.vx += (p.homeX - p.x) * SPRING
        p.vy += (p.homeY - p.y) * SPRING
        p.vx *= DAMPING
        p.vy *= DAMPING
        p.x += p.vx
        p.y += p.vy

        // Base colour — white in dark mode, near-black in light mode
        let r = isDark ? 255 : 15
        let g = isDark ? 255 : 15
        let b = isDark ? 255 : 15
        // Light mode particles need higher opacity since dark-on-white contrast is lower
        let opacity = isDark ? p.baseOpacity : p.baseOpacity * 1.1

        if (hasMouseInView && dist < GLOW_RADIUS) {
          const tOuter = dist / GLOW_RADIUS
          const ring = Math.sin(tOuter * Math.PI)
          // nearFade: 0 right at cursor → 1 at 60px
          const nearFade = Math.min(dist / 60, 1)
          const tInner = dist / GLOW_RADIUS
          const tint = Math.sin(tInner * Math.PI)

          if (isDark) {
            const boost = 0.42
            opacity = (p.baseOpacity + ring * ring * boost) * nearFade
            // White → #a68efc (166, 142, 252)
            r = Math.round(255 - tint * 89)
            g = Math.round(255 - tint * 113)
            b = 255
          } else {
            // Small boost only at the colour peak so purple is readable,
            // but edges stay near base opacity to blend with resting particles.
            opacity = (p.baseOpacity * 1.1 + tint * tint * 0.22) * nearFade
            // Near-black (15,15,15) → #5728ff at ring peak → back to near-black at edge
            r = Math.round(15 + tint * 72)
            g = Math.round(15 + tint * 25)
            b = Math.round(15 + tint * 240)
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${opacity.toFixed(3)})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY }
    const onLeave = () => { mouseX = -9999; mouseY = -9999 }
    const onResize = () => { build() }

    build()
    draw()
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}
