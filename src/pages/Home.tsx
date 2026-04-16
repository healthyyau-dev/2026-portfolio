import SideNav from '../components/SideNav'
import IconGrid from '../components/IconGrid'
import ParticleBackground from '../components/ParticleBackground'
import CustomCursor from '../components/CustomCursor'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <CustomCursor />
      <ParticleBackground />
      <SideNav />
      <main className={styles.content}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heading}>
              <span className={styles.headingLine1}>Portfolio of a</span>
              <span className={styles.headingLine2}>Product &amp; UX designer</span>
            </h1>
          </div>
          <div className={styles.gridArea}>
            <IconGrid />
          </div>
        </section>
      </main>
    </div>
  )
}
