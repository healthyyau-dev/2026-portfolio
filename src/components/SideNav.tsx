import { useState, useEffect, useRef } from 'react'
import styles from './SideNav.module.css'

// Figma asset URLs — valid 7 days
const ICON_HOME     = 'https://www.figma.com/api/mcp/asset/e7c3c926-5c60-4d08-a8b6-baaa66075475'
const ICON_WORKS    = 'https://www.figma.com/api/mcp/asset/8cadabe1-9e0a-4dd1-a82f-9edfad58c627'
const ICON_THOUGHTS = 'https://www.figma.com/api/mcp/asset/6175b54d-9a68-4675-afb6-5ff38742520b'
const ICON_EXP      = 'https://www.figma.com/api/mcp/asset/5513de7c-2bc3-4bd8-8be7-c0b8a26076c9'
const ICON_CONTACT  = 'https://www.figma.com/api/mcp/asset/344b6b59-90cb-49b9-83e4-645ace28a818'
const ICON_SETTINGS = 'https://www.figma.com/api/mcp/asset/5dbdde70-1359-42d9-8d55-537fa06fc0cd'
const AVATAR_IMG    = 'https://www.figma.com/api/mcp/asset/74122a61-44bc-4ebc-879b-e1cdc6d234ec'
const AVATAR_RING   = 'https://www.figma.com/api/mcp/asset/eddede4e-b608-48a4-878e-1e13a6ee25b4'

const navItems = [
  { id: 'home',        label: 'Home',        icon: ICON_HOME,     active: true },
  { id: 'works',       label: 'Works',       icon: ICON_WORKS },
  { id: 'thoughts',    label: 'Thoughts',    icon: ICON_THOUGHTS },
  { id: 'experiences', label: 'Experiences', icon: ICON_EXP },
  { id: 'contact',     label: 'Contact',     icon: ICON_CONTACT },
]

export default function SideNav() {
  const [expanded, setExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const itemsGroupRef = useRef<HTMLDivElement>(null)

  // Initialise theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = stored ? stored === 'dark' : prefersDark
    setIsDark(dark)
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    const value = next ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem('theme', value)
  }

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 400px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  return (
    <>
    {/* SVG filter definitions — used by .iconActive CSS class */}
    <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
      <defs>
        {/* Light mode active: #5728ff */}
        <filter id="icon-active-light" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0 0 0 0 0.341
                                               0 0 0 0 0.157
                                               0 0 0 0 1.0
                                               0 0 0 1 0"/>
        </filter>
        {/* Dark mode active: #a68efc */}
        <filter id="icon-active-dark" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0 0 0 0 0.651
                                               0 0 0 0 0.557
                                               0 0 0 0 0.988
                                               0 0 0 1 0"/>
        </filter>
      </defs>
    </svg>

    <div
      ref={menuRef}
      className={`${styles.nav} ${expanded && !isMobile ? styles.expanded : ''}`}
      onMouseEnter={() => { if (!isMobile) setExpanded(true) }}
      onMouseLeave={() => { if (!isMobile) setExpanded(false) }}
    >
      {/* Mobile hamburger dropdown */}
      {isMobile && (
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.item} ${item.active ? styles.itemActive : ''}`}
              aria-label={item.label}
              onClick={() => setMenuOpen(false)}
            >
              <img src={item.icon} alt="" className={`${styles.icon} ${item.active ? styles.iconActive : ''}`} />
              <span className={`${styles.mobileMenuLabel} ${item.active ? styles.labelActive : styles.labelInactive}`}>
                {item.label}
              </span>
            </button>
          ))}
          <div className={styles.mobileMenuDivider} />
          <button className={styles.item} aria-label="Toggle theme" onClick={() => { toggleTheme(); setMenuOpen(false) }}>
            <img src={ICON_SETTINGS} alt="" className={styles.icon} />
            <span className={`${styles.mobileMenuLabel} ${styles.labelInactive}`}>{isDark ? 'Light mode' : 'Dark mode'}</span>
          </button>
        </div>
      )}

      <div className={styles.container}>

        {/* Nav items — hidden on mobile */}
        <div className={`${styles.list} ${isMobile ? styles.listHidden : ''}`}>
          <div className={styles.itemsGroup} ref={itemsGroupRef}>
            <div className={styles.activeBg} />
            <div className={styles.activeBar} />

            {navItems.map((item) => (
              <button key={item.id} className={`${styles.item} ${item.active ? styles.itemActive : ''}`} aria-label={item.label}>
                <img src={item.icon} alt="" className={`${styles.icon} ${item.active ? styles.iconActive : ''}`} />
                <span className={`${styles.label} ${item.active ? styles.labelActive : styles.labelInactive}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer: settings + avatar */}
        <div className={styles.footer}>
          <button className={styles.item} aria-label="Toggle theme" onClick={toggleTheme}>
            <img src={ICON_SETTINGS} alt="" className={styles.icon} />
            <span className={`${styles.label} ${styles.labelInactive}`}>{isDark ? 'Light mode' : 'Dark mode'}</span>
          </button>

          <div className={styles.avatarRow}>
            <div className={styles.avatarWrap}>
              <img src={AVATAR_IMG} alt="Profile" className={styles.avatar} />
            </div>
            <div className={`${styles.avatarText} ${styles.label}`}>
              <span className={styles.avatarRole}>Product Designer</span>
              <span className={styles.avatarName}>Healthy Yau</span>
            </div>
          </div>
        </div>

        {/* Mobile-only: avatar + name + hamburger */}
        {isMobile && (
          <div className={styles.mobileBar}>
            <div className={styles.avatarWrap}>
              <img src={AVATAR_IMG} alt="Profile" className={styles.avatar} />
            </div>
            <span className={styles.mobileName}>
              <span className={styles.mobileActiveBar} />
              Healthy Yau.
            </span>
            <button
              className={styles.hamburger}
              aria-label="Open menu"
              onClick={() => setMenuOpen(o => !o)}
            >
              <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen1 : ''}`} />
              <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen2 : ''}`} />
              <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen3 : ''}`} />
            </button>
          </div>
        )}

      </div>
    </div>
    </>
  )
}
