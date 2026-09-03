import React from 'react'

export default function Header({ pages, path, menu, onNavigate, onToggleMenu }) {
  return (
    <header className="site-header">
      <button className="brand" onClick={() => onNavigate('/')} aria-label="Motion Dept home">
        <span className="brand-mark">M</span>
        <span className="brand-copy">Motion<br />Dept.</span>
      </button>
      <nav className={menu ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
        {Object.entries(pages).map(([url, item]) => (
          <button key={url} className={path === url ? 'nav-link active' : 'nav-link'} onClick={() => onNavigate(url)}>
            {item.label}<i aria-hidden="true" />
          </button>
        ))}
        <span className="auth-links" aria-label="Account navigation">
          <button className="nav-link auth-link" onClick={() => onNavigate('/login')}>Login<i aria-hidden="true" /></button>
          <button className="nav-link auth-link auth-link-primary" onClick={() => onNavigate('/signup')}>Sign up<i aria-hidden="true" /></button>
        </span>
      </nav>
      <button className="menu-button" onClick={onToggleMenu} aria-expanded={menu} aria-label={menu ? 'Close menu' : 'Open menu'}>
        <span /><span />
      </button>
    </header>
  )
}
