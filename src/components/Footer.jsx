import React from 'react'

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-top"><span className="footer-kicker">Let&apos;s make<br />something move.</span><button className="footer-cta" onClick={() => onNavigate('/resources')}>Start a conversation <span>↗</span></button></div>
      <div className="footer-bottom"><span>© Motion Dept. 2026</span><span>New York · Everywhere</span><button onClick={() => onNavigate('/about')}>About the studio ↗</button></div>
    </footer>
  )
}
