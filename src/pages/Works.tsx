import styles from './Works.module.css'

const CARDS = [
  {
    title: 'Pepperstone Hub',
    type: 'Product design · CFD Trading · Web',
    tags: ['Pepperstone', '2026'],
  },
  {
    title: 'Financial Product — Simple Earn flexible',
    type: 'Product design · Crypto · Mobile',
    tags: ['OKX', '2024'],
  },
  {
    title: 'Financial Product — Simple Earn flexible',
    type: 'Product design · Crypto · Mobile',
    tags: ['OKX', '2024'],
  },
  {
    title: 'User center revamp',
    type: 'Product design · Crypto · Mobile',
    tags: ['OKX'],
  },
]

export default function Works() {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        {CARDS.map((card, i) => (
          <article key={i} className={styles.card}>
            {/* Placeholder — swap with real thumbnail once assets are exported */}
            <div className={styles.thumbnail} />
            <div className={styles.info}>
              <div className={styles.meta}>
                <h2 className={styles.title}>{card.title}</h2>
                <p className={styles.type}>{card.type}</p>
              </div>
              <div className={styles.tags}>
                {card.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
