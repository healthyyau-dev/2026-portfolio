import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heading}>
          <span className={styles.headingLine1}>Portfolio of a</span>
          <span className={styles.headingLine2}>Product &amp; UX designer</span>
        </h1>
      </div>
    </section>
  )
}
