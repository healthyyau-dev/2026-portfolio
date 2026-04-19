import { useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import SideNav from './SideNav'
import ParticleBackground from './ParticleBackground'
import CustomCursor from './CustomCursor'
import IconGrid from './IconGrid'
import styles from './Layout.module.css'

// Ordered route list — drives both scroll-nav and page transitions
const ROUTES = ['/', '/works', '/thoughts', '/experiences', '/contact']

export default function Layout() {
  const navigate    = useNavigate()
  const location    = useLocation()
  const contentRef  = useRef<HTMLDivElement>(null)
  const busy        = useRef(false)          // cooldown flag
  const [dir, setDir] = useState<'down' | 'up'>('down')  // for CSS animation

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      if (busy.current) return

      // +50 threshold: the entry animation (translateY 48px) inflates scrollHeight
      // by exactly 48px in Chromium; real scrollable pages overflow by hundreds of px.
      const isScrollable  = el.scrollHeight > el.clientHeight + 50
      const atTop         = el.scrollTop <= 0
      // Non-scrollable pages (e.g. Home) are always at the boundary in both directions
      const atBottom      = !isScrollable || (el.scrollTop + el.clientHeight >= el.scrollHeight - 2)
      const scrollingDown = e.deltaY > 0

      const idx  = ROUTES.indexOf(location.pathname)
      const next = ROUTES[idx + 1]
      const prev = ROUTES[idx - 1]

      if (scrollingDown && atBottom && next) {
        busy.current = true
        setDir('down')
        navigate(next)
        setTimeout(() => { busy.current = false }, 900)
      } else if (!scrollingDown && atTop && prev) {
        busy.current = true
        setDir('up')
        navigate(prev)
        setTimeout(() => { busy.current = false }, 900)
      }
    }

    el.addEventListener('wheel', onWheel, { passive: true })
    return () => el.removeEventListener('wheel', onWheel)
  }, [location.pathname, navigate])

  // Reset scroll position at the top when navigating forward,
  // and at the bottom when navigating backward so the scroll
  // boundary check above works immediately on arrival.
  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    if (dir === 'down') {
      el.scrollTop = 0
    } else {
      el.scrollTop = el.scrollHeight
    }
  }, [location.pathname, dir])

  const isHome = location.pathname === '/'

  return (
    <div className={styles.page}>
      <CustomCursor />
      <ParticleBackground />
      {/* IconGrid rendered here — outside <main> — so position:fixed works correctly
          without being broken by the slide animation's CSS transform */}
      {isHome && <IconGrid />}
      <SideNav />
      <main className={styles.content}>
        <div ref={contentRef} className={styles.scrollInner}>
          {/* key re-mounts the outlet so the CSS entry animation fires on every route change */}
          <div
            key={location.pathname}
            className={`${styles.slide} ${dir === 'down' ? styles.fromBottom : styles.fromTop}`}
          >
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}
