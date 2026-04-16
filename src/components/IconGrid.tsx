import type { ReactNode } from 'react'
import styles from './IconGrid.module.css'

// Tool icons as inline SVGs matching the Figma isometric grid
const tiles: { id: string; icon: ReactNode; highlight?: boolean }[] = [
  { id: 'figma', icon: <FigmaIcon />, highlight: true },
  { id: 'openai', icon: <OpenAIIcon /> },
  { id: 'anthropic', icon: <AnthropicIcon /> },
  { id: 'slack', icon: <SlackIcon /> },
  { id: 'framer', icon: <FramerIcon /> },
  { id: 'notion', icon: <NotionIcon /> },
  { id: 'linear', icon: <LinearIcon /> },
  { id: 'vercel', icon: <VercelIcon /> },
  { id: 'jira', icon: <JiraIcon /> },
  { id: 'cursor', icon: <CursorIcon /> },
  { id: 'perplexity', icon: <PerplexityIcon /> },
  { id: 'miro', icon: <MiroIcon /> },
  { id: 'github', icon: <GithubIcon /> },
  { id: 'arc', icon: <ArcIcon /> },
  { id: 'claude', icon: <ClaudeIcon /> },
  { id: 'lottie', icon: <LottieIcon /> },
  { id: 'raycast', icon: <RaycastIcon /> },
  { id: 'things', icon: <ThingsIcon /> },
  { id: 'protopie', icon: <ProtoPieIcon /> },
  { id: 'spline', icon: <SplineIcon /> },
]

export default function IconGrid() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.grid}>
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className={`${styles.tile} ${tile.highlight ? styles.highlight : ''}`}
          >
            {tile.icon}
          </div>
        ))}
      </div>
    </div>
  )
}

function FigmaIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 38 57" fill="none">
      <path d="M19 28.5A9.5 9.5 0 1128.5 19 9.5 9.5 0 0119 28.5z" fill="#1ABCFE"/>
      <path d="M9.5 47.5A9.5 9.5 0 019.5 28.5H19V47.5a9.5 9.5 0 01-9.5 0z" fill="#0ACF83"/>
      <path d="M9.5 28.5A9.5 9.5 0 019.5 9.5H19V28.5z" fill="#FF7262"/>
      <path d="M19 9.5H28.5a9.5 9.5 0 010 19H19z" fill="#F24E1E"/>
      <path d="M28.5 28.5a9.5 9.5 0 110 19 9.5 9.5 0 010-19z" fill="#A259FF"/>
    </svg>
  )
}

function OpenAIIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.759a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.032.067L9.751 19.86a4.5 4.5 0 01-6.15-1.556zM2.34 7.896a4.485 4.485 0 012.366-1.973V12.5a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0L3.61 14.473A4.5 4.5 0 012.34 7.896zm16.597 3.855l-5.843-3.372 2.02-1.163a.077.077 0 01.071 0l5.208 3.003a4.5 4.5 0 01-.676 8.115v-6.577a.795.795 0 00-.38-.006zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l5.209-3a4.5 4.5 0 016.705 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08L8.704 5.46a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  )
}

function AnthropicIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.827 3.52h3.603L24 20.48h-3.603l-6.57-16.96zm-7.258 0H10.172L16.742 20.48H13.138L11.685 16.5H5.258L3.805 20.48H.202L6.57 3.52zm4.132 9.959L8.473 7.157 6.289 13.479h4.412z"/>
    </svg>
  )
}

function SlackIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.527 2.527 0 012.521 2.522v2.52H8.834zm0 1.271a2.527 2.527 0 012.521 2.521 2.527 2.527 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.527 2.527 0 01-2.522 2.521h-2.522V8.834zm-1.268 0a2.527 2.527 0 01-2.521 2.521 2.528 2.528 0 01-2.522-2.521V2.522A2.528 2.528 0 0115.167 0a2.528 2.528 0 012.521 2.522v6.312zm-2.521 10.123a2.528 2.528 0 012.521 2.522A2.528 2.528 0 0115.167 24a2.527 2.527 0 01-2.521-2.522v-2.522h2.521zm0-1.268a2.527 2.527 0 01-2.521-2.521 2.527 2.527 0 012.521-2.522h6.313A2.528 2.528 0 0124 15.167a2.528 2.528 0 01-2.522 2.521h-6.313z" fill="#E01E5A"/>
    </svg>
  )
}

function FramerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
    </svg>
  )
}

function NotionIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
    </svg>
  )
}

function LinearIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 14.008L9.992 24l14.007-14.008L14.008 0 0 14.008zM1.473 14.957l7.57 7.57 12.484-12.484-7.57-7.571L1.473 14.957z"/>
    </svg>
  )
}

function VercelIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 22.525H0l12-21.05 12 21.05z"/>
    </svg>
  )
}

function JiraIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M11.571 11.513H0a5.218 5.218 0 005.232 5.215h2.13v2.057A5.215 5.215 0 0012.575 24V12.518a1.005 1.005 0 00-1.004-1.005z" fill="#2684FF"/>
      <path d="M6.285 5.764H6.285a5.215 5.215 0 005.232 5.215h2.129v2.058a5.215 5.215 0 005.215 5.215V6.768a1.005 1.005 0 00-1.004-1.004z" fill="url(#jira-g1)"/>
      <path d="M11.93.01H.36a5.215 5.215 0 005.215 5.214h2.13V7.28a5.215 5.215 0 005.214 5.215V1.014A1.005 1.005 0 0011.93.01z" fill="url(#jira-g2)"/>
      <defs>
        <linearGradient id="jira-g1" x1="11.767" y1="10.999" x2="8.25" y2="14.518" gradientUnits="userSpaceOnUse">
          <stop offset=".18" stopColor="#0052CC"/>
          <stop offset="1" stopColor="#2684FF"/>
        </linearGradient>
        <linearGradient id="jira-g2" x1="12.323" y1="5.254" x2="8.582" y2="8.993" gradientUnits="userSpaceOnUse">
          <stop offset=".18" stopColor="#0052CC"/>
          <stop offset="1" stopColor="#2684FF"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function CursorIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L2 4v10l10 10 10-10V4L12 0zm0 2.18l8 3.2v8.18L12 20.6l-8-7.04V5.38l8-3.2z"/>
    </svg>
  )
}

function PerplexityIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.594 7.008l-6.76 5.827V2.038L8.166 9.009V.5H.5v23h7.666V15l7.668 6.971V11.154l6.76 5.827V7.008zM2.148 2.148h4.37v5.604l-4.37 3.761V2.148zm4.37 19.704h-4.37v-7.367l4.37-3.763v11.13zm1.648.01v-5.604l4.37-3.762v9.366h-4.37zm4.37-11.13l-4.37 3.761V8.127l4.37-3.76v6.365zm1.648 11.12v-9.367l4.37 3.762v5.605h-4.37zm0-11.13V4.366l4.37 3.76v6.366l-4.37-3.76zm5.242 9.52l.131-.118V9.153l-.131-.115-4.11-3.537v4.367l4.11 3.537v6.975l-4.11 3.537v-4.368l4.11-3.54z"/>
    </svg>
  )
}

function MiroIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.392.006H14.28L16.91 5.22 11.24.006H8.127l2.628 5.952-6.3-5.952H1.344L4.704 8.04.984 24h3.072l2.76-12.144L9.36 24h3.072l-.048-12.144L14.94 24h3.06l-1.788-12.144L18.672 24h3.072l-1.656-15.96z"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  )
}

function ArcIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function ClaudeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128-4.72-2.68-.08.09v5.507l.08.088zm3.166-4.245l3.93 2.182-3.93 2.202V11.71zm-2.59 1.19l.08.09 4.79 2.704.08-.09V10.15l-.08-.09-4.79 2.682-.08.09v.068zm5.907.09l3.885 2.16-3.885 2.204V12.99zm-1.037 2.736l4.785-2.68.09-.09v-.068l-.09-.09-4.785-2.703-.09.09v5.45l.09.09zm7.364-.182l-5.302 2.974-.09-.045V12.99l.09-.09 5.302-2.975.09.09v5.44l-.09.09zm-5.392 2.93l5.302-2.975.09.09v.068l-.09.09-5.302 2.974-.09-.09v-.068l.09-.09zm5.437-8.76l-5.347 2.998-.09-.09v-5.44l.09-.09 5.347 2.975.09.09v.068l-.09.09zm-5.302 2.952l5.302-2.974.09.09v.068l-.09.09-5.302 2.975-.09-.09v-.069l.09-.09z"/>
    </svg>
  )
}

function LottieIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 110 16A8 8 0 0112 4zm0 2a6 6 0 100 12A6 6 0 0012 6zm0 2a4 4 0 110 8 4 4 0 010-8z"/>
    </svg>
  )
}

function RaycastIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 14.066l10.07 9.934V19.93l-6.007-5.864H0zM9.934 0L0 9.935h4.063L9.934 4.063V0zm4.066 24l9.934-9.935h-4.063l-5.871 5.872V24zM24 9.934L14.066 0v4.063l5.872 5.871H24zM0 16.971v3.03l4.002-3.03H0zm20 0l4 3.03v-3.03h-4zM0 7.028L4.002 4H0v3.028zM20 4l4 3.028V4h-4zM9.934 24V20L0 10.07v4.002L9.934 24zM24 9.934L14.066 0v4l9.93 9.934L24 9.934z"/>
    </svg>
  )
}

function ThingsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ProtoPieIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
    </svg>
  )
}

function SplineIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L4 7v10l8 5 8-5V7L12 2zm0 2.236L18.764 8 12 11.764 5.236 8 12 4.236zM5 9.764l6 3.472V19.06L5 15.59V9.764zm8 9.296v-6.06l6-3.468V15.59l-6 3.47z"/>
    </svg>
  )
}
