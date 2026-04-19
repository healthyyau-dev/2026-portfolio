import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './SideNav.module.css'

// Local icon assets — served from /public/icons/
const ICON_HOME     = '/icons/home.svg'
const ICON_WORKS    = '/icons/works.svg'
const ICON_THOUGHTS = '/icons/thoughts.svg'
const ICON_EXP      = '/icons/experiences.svg'
const ICON_CONTACT  = '/icons/contact.svg'
const ICON_SETTINGS = '/icons/settings.svg'
const AVATAR_IMG    = 'https://www.figma.com/api/mcp/asset/74122a61-44bc-4ebc-879b-e1cdc6d234ec'

const navItems = [
  { id: 'home',        label: 'Home',        icon: ICON_HOME,     path: '/' },
  { id: 'works',       label: 'Works',       icon: ICON_WORKS,    path: '/works' },
  { id: 'thoughts',    label: 'Thoughts',    icon: ICON_THOUGHTS, path: '/thoughts' },
  { id: 'experiences', label: 'Experiences', icon: ICON_EXP,      path: '/experiences' },
  { id: 'contact',     label: 'Contact',     icon: ICON_CONTACT,  path: '/contact' },
]

export default function SideNav() {
  const [expanded, setExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [avatarLoaded, setAvatarLoaded] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Determine active item from current route
  const activeId = navItems.find(item => {
    if (item.path === '/') return location.pathname === '/'
    return location.pathname.startsWith(item.path)
  })?.id ?? 'home'

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

  const handleNav = (path: string) => {
    navigate(path)
    setMenuOpen(false)
  }

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
          {navItems.map((item) => {
            const isActive = item.id === activeId
            return (
              <button
                key={item.id}
                className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                aria-label={item.label}
                onClick={() => handleNav(item.path)}
              >
                <img src={item.icon} alt="" className={`${styles.icon} ${isActive ? styles.iconActive : ''}`} />
                <span className={`${styles.mobileMenuLabel} ${isActive ? styles.labelActive : styles.labelInactive}`}>
                  {item.label}
                </span>
              </button>
            )
          })}
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
          <div className={styles.itemsGroup}>
            {/* Active background pill — translates to the active item's position */}
            <div
              className={styles.activeBg}
              style={{
                transform: `translateY(${navItems.findIndex(i => i.id === activeId) * 60}px)`
              }}
            />
            <div
              className={styles.activeBar}
              style={{
                transform: `translateY(${navItems.findIndex(i => i.id === activeId) * 60}px)`
              }}
            />

            {navItems.map((item) => {
              const isActive = item.id === activeId
              return (
                <button
                  key={item.id}
                  className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                  aria-label={item.label}
                  onClick={() => handleNav(item.path)}
                >
                  <img src={item.icon} alt="" className={`${styles.icon} ${isActive ? styles.iconActive : ''}`} />
                  <span className={`${styles.label} ${isActive ? styles.labelActive : styles.labelInactive}`}>
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Footer: settings + avatar */}
        <div className={styles.footer}>
          <button className={styles.item} aria-label="Toggle theme" onClick={toggleTheme}>
            <img src={ICON_SETTINGS} alt="" className={styles.icon} />
            <span className={`${styles.label} ${styles.labelInactive}`}>{isDark ? 'Light mode' : 'Dark mode'}</span>
          </button>

          <div className={`${styles.avatarRow} ${avatarLoaded ? styles.avatarRowVisible : ''}`}>
            <div className={styles.avatarWrap}>
              <img
                src={AVATAR_IMG}
                alt="Profile"
                className={`${styles.avatar} ${avatarLoaded ? styles.avatarLoaded : ''}`}
                onLoad={() => setAvatarLoaded(true)}
                ref={(el) => { if (el?.complete) setAvatarLoaded(true) }}
              />
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
              <img
                src={AVATAR_IMG}
                alt="Profile"
                className={`${styles.avatar} ${avatarLoaded ? styles.avatarLoaded : ''}`}
                onLoad={() => setAvatarLoaded(true)}
                ref={(el) => { if (el?.complete) setAvatarLoaded(true) }}
              />
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
