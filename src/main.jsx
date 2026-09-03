import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import PageContent from './components/PageContent'
import './styles.css'

const pages = {
  '/': { key: 'home', label: 'Home', index: 1, eyebrow: 'Independent digital studio · 2026', title: <>We make<br /><span>motion</span> move.</>, copy: 'A small team of designers and developers building expressive identities, websites, and experiences for brands with something to say.' },
  '/about': { key: 'about', label: 'About', index: 2, eyebrow: 'The people behind the pixels', title: <>Ideas with<br /><span>momentum.</span></>, copy: 'Motion Dept. is a close-knit creative practice focused on turning sharp thinking into unforgettable digital moments.' },
  '/showcase': { key: 'showcase', label: 'Showcase', index: 3, eyebrow: 'Selected experiments', title: <>Work that<br /><span>lands.</span></>, copy: 'A rotating selection of projects, systems, and tiny details made to be felt.' },
  '/resources': { key: 'resources', label: 'Resources', index: 4, eyebrow: 'Notes for moving forward', title: <>Make your<br /><span>mark.</span></>, copy: 'Useful references, creative prompts, and practical thinking from our studio to your screen.' },
}

function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [menu, setMenu] = useState(false)
  const page = pages[path] || pages['/']
  useEffect(() => { const onPop = () => setPath(window.location.pathname); window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop) }, [])
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenu(false) }, [path])
  const go = (url) => { if (url === path) return; window.history.pushState({}, '', url); setPath(url) }
  return <div className="site-shell"><Header pages={pages} path={path} menu={menu} onNavigate={go} onToggleMenu={() => setMenu(!menu)} /><main className="page"><PageContent page={page} onNavigate={go} /></main><Footer onNavigate={go} /></div>
}

createRoot(document.getElementById('root')).render(<App />)
