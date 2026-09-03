import React, { useEffect, useState } from 'react'

export default function PageContent({ page, onNavigate }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { setScrollY(window.scrollY); ticking = false })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const heroProgress = Math.min(scrollY / 560, 1)
  return (
    <>
      <section className="hero scroll-hero" key={page.key} style={{ '--scroll-progress': heroProgress }}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-meta"><span className="eyebrow">{page.eyebrow}</span><span className="counter">0{page.index} / 04</span></div>
        <div className="hero-center"><span className="side-note">Scroll to explore <b>↓</b></span><h1 className="title">{page.title}</h1><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-word">{page.key}</div></div>
        <div className="hero-bottom"><p>{page.copy}</p><button className="circle-button" onClick={() => document.querySelector('.below')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Scroll to explore">↓</button></div>
        <div className="scroll-progress" aria-hidden="true" />
      </section>
      <section className="below scroll-section"><div className="section-label">01 — The approach</div><div className="feature-grid"><article className="feature feature-large"><span className="feature-num">A</span><h2>Make it<br /><em>memorable.</em></h2><p>We believe the web should have rhythm. Every interaction has a beat, every screen a point of view.</p><button onClick={() => onNavigate('/showcase')}>Explore the work <b>↗</b></button></article><article className="feature feature-lime"><span className="feature-num">B</span><h2>Built for<br /><em>curiosity.</em></h2><div className="sticker">PLAY<br />MORE</div><button onClick={() => onNavigate('/about')}>Meet the studio <b>↗</b></button></article></div></section>
      <section className="manifesto scroll-section"><span className="section-label">02 — A little manifesto</span><p>Good design doesn&apos;t sit still. <strong>It invites you in.</strong> It makes the familiar feel strange and the strange feel like home.</p></section>
    </>
  )
}
