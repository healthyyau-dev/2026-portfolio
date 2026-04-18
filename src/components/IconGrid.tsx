import styles from './IconGrid.module.css'

// ── Assets from Figma node 3610-4012 (valid 7 days) ──────────────────────────
const ANTHROPIC  = 'https://www.figma.com/api/mcp/asset/93cb7bcd-f2f8-45fc-a237-fb35b0b7e7b4'
const TOK_R1     = 'https://www.figma.com/api/mcp/asset/c4e3bf76-d984-495e-8db2-606807f30855'
const GROUP_A    = 'https://www.figma.com/api/mcp/asset/e471bfb3-4a63-46d7-82ba-feca15811a42'
const CLAUDE     = 'https://www.figma.com/api/mcp/asset/268a2b19-92f1-4193-bec6-9db6bada091c'
const OPENAI     = 'https://www.figma.com/api/mcp/asset/eb3c80f7-15af-4009-9117-009ec2caced4'
const PERPLEXITY = 'https://www.figma.com/api/mcp/asset/851131a6-b188-4f6d-9a66-66db1c61cd43'
const OPENCLAW   = 'https://www.figma.com/api/mcp/asset/55c17288-2cba-4dd0-b3a6-a3eaade48aea'
const NANO       = 'https://www.figma.com/api/mcp/asset/79c64b62-2bce-4118-afd5-937ab140e114'
const GROUP_B    = 'https://www.figma.com/api/mcp/asset/1d6bdef5-2c4e-4d78-986c-dee7954b2324'
const TOK_1      = 'https://www.figma.com/api/mcp/asset/57b228ab-a56b-4d46-873b-9166c477577d'
const TOK_2      = 'https://www.figma.com/api/mcp/asset/ac969f95-667b-4348-a799-f825aef3dcc7'
const FIGMA_ICON = 'https://www.figma.com/api/mcp/asset/ba47b1e6-3f3c-4121-90ac-89ccdfbebb44'
const TOK_3      = 'https://www.figma.com/api/mcp/asset/f949973b-78dd-46f7-8582-b59cac58b926'
const GROUP_C    = 'https://www.figma.com/api/mcp/asset/304f5d34-1973-42a0-b519-c251cf2f1dee'
const TOK_4      = 'https://www.figma.com/api/mcp/asset/13800145-545e-432f-b4e6-e7804c1cd15c'
const GROUP_D    = 'https://www.figma.com/api/mcp/asset/7acd41f6-fa2d-4c6a-a158-c42718872418'
const TOK_5      = 'https://www.figma.com/api/mcp/asset/f18016c4-cd2a-496a-8347-eadecb9fac56'
const CONFLUENCE = 'https://www.figma.com/api/mcp/asset/375f876c-dab6-472f-81d2-bd72be29d7f1'
const JIRA       = 'https://www.figma.com/api/mcp/asset/378759b7-e010-42ce-bfd9-91cc5306d548'
const SLACK      = 'https://www.figma.com/api/mcp/asset/17959c0c-69b6-4f67-b465-24182fca264d'
const OUTLOOK    = 'https://www.figma.com/api/mcp/asset/0253d1c5-bcb1-440b-adde-932a2aa00881'
const TOK_6      = 'https://www.figma.com/api/mcp/asset/eabc635e-415e-46e3-8cca-e1b2ee2cd7c9'
const TOK_7      = 'https://www.figma.com/api/mcp/asset/fe19c71d-fc4e-424d-8e7d-e2708e92e6e2'
const GROUP_E    = 'https://www.figma.com/api/mcp/asset/392877eb-b218-4fe1-b09f-e6bfd5c7249b'

// ── Tile data types ──────────────────────────────────────────────────────────
type Tile =
  | { k: 'empty' }
  | { k: 'img';      src: string }
  | { k: 'icon';     src: string; rot?: true }
  | { k: 'featured' }

// ── Row definitions ───────────────────────────────────────────────────────────
// Row 1 & 4: small tiles (149.89px), gap 16.654px
// Row 2 & 3: large tiles (166.094px), gap 18.455px

const ROW1: Tile[] = [
  { k: 'empty' }, { k: 'empty' }, { k: 'empty' }, { k: 'empty' },
  { k: 'icon', src: ANTHROPIC },
  { k: 'img',  src: TOK_R1 },
  { k: 'icon', src: GROUP_A,    rot: true },
  { k: 'icon', src: CLAUDE },
  { k: 'icon', src: OPENAI },
  { k: 'icon', src: PERPLEXITY, rot: true },
  { k: 'icon', src: OPENCLAW,   rot: true },
  { k: 'icon', src: NANO,       rot: true },
]

const ROW2: Tile[] = [
  { k: 'empty' }, { k: 'empty' }, { k: 'empty' },
  { k: 'icon', src: GROUP_B, rot: true },
  { k: 'img',  src: TOK_1 },
  { k: 'img',  src: TOK_2 },
  { k: 'featured' },
  { k: 'img',  src: TOK_3 },
  { k: 'icon', src: GROUP_C, rot: true },
  { k: 'img',  src: TOK_4 },
  { k: 'empty' },
]

const ROW3: Tile[] = [
  { k: 'empty' }, { k: 'empty' }, { k: 'empty' },
  { k: 'icon', src: GROUP_D,    rot: true },
  { k: 'img',  src: TOK_5 },
  { k: 'icon', src: CONFLUENCE, rot: true },
  { k: 'icon', src: JIRA,       rot: true },
  { k: 'icon', src: SLACK,      rot: true },
  { k: 'icon', src: OUTLOOK,    rot: true },
  { k: 'img',  src: TOK_6 },
  { k: 'empty' }, { k: 'empty' },
]

const ROW4: Tile[] = [
  { k: 'empty' }, { k: 'empty' }, { k: 'empty' }, { k: 'empty' },
  { k: 'img',  src: TOK_7 },
  { k: 'icon', src: GROUP_E, rot: true },
  { k: 'empty' }, { k: 'empty' },
]

// ── Tile renderers ────────────────────────────────────────────────────────────
function SmTile({ tile }: { tile: Tile }) {
  if (tile.k === 'empty') return <div className={styles.tileSmall} />

  if (tile.k === 'img') return (
    <div className={styles.tokenSmall}>
      <img src={tile.src} alt="" className={styles.tokenImg} />
    </div>
  )

  if (tile.k === 'icon') return (
    <div className={styles.tileSmall}>
      <div className={tile.rot ? styles.iconRot : styles.icon}>
        <img src={tile.src} alt="" className={styles.iconImgSm} />
      </div>
    </div>
  )

  return null
}

function LgTile({ tile }: { tile: Tile }) {
  if (tile.k === 'empty') return <div className={styles.tileLarge} />

  if (tile.k === 'img') return (
    <div className={styles.tokenLarge}>
      <img src={tile.src} alt="" className={styles.tokenImg} />
    </div>
  )

  if (tile.k === 'featured') return (
    <div className={`${styles.tileLarge} ${styles.featured}`}>
      <div className={styles.iconRot}>
        <img src={FIGMA_ICON} alt="Figma" className={styles.featuredImg} />
      </div>
    </div>
  )

  if (tile.k === 'icon') return (
    <div className={styles.tileLarge}>
      <div className={tile.rot ? styles.iconRot : styles.icon}>
        <img src={tile.src} alt="" className={styles.iconImgLg} />
      </div>
    </div>
  )

  return null
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function IconGrid() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.container}>
        <div className={styles.rowSmall}>
          {ROW1.map((t, i) => <SmTile key={i} tile={t} />)}
        </div>
        <div className={styles.rowLarge}>
          {ROW2.map((t, i) => <LgTile key={i} tile={t} />)}
        </div>
        <div className={styles.rowLarge}>
          {ROW3.map((t, i) => <LgTile key={i} tile={t} />)}
        </div>
        <div className={styles.rowSmall}>
          {ROW4.map((t, i) => <SmTile key={i} tile={t} />)}
        </div>
      </div>
    </div>
  )
}
