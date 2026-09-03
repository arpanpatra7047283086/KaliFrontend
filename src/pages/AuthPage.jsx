import React, { useState } from 'react'

export default function AuthPage({ mode, onNavigate }) {
  const isLogin = mode === 'login'
  const [showPassword, setShowPassword] = useState(false)
  return (
    <main className="auth-page">
      <div className="auth-panel auth-brand-panel">
        <button className="auth-brand" onClick={() => onNavigate('/')} aria-label="Go to AIWithStudy home"><span className="auth-mark">A</span><span>AIWithStudy</span></button>
        <div className="auth-promise"><span className="eyebrow">Your intelligent study companion</span><h1>Learn with<br /><em>momentum.</em></h1><p>Turn your notes into clarity, confidence, and better outcomes.</p></div>
        <span className="auth-signature">Made by @KALI</span>
      </div>
      <div className="auth-panel auth-form-panel">
        <div className="auth-form-wrap"><span className="eyebrow">{isLogin ? 'Welcome back' : 'Start learning smarter'}</span><h2>{isLogin ? 'Sign in to your workspace.' : 'Create your workspace.'}</h2><p className="auth-subtitle">{isLogin ? 'Pick up where you left off.' : 'Your focused study system starts here.'}</p>
          <form onSubmit={(event) => { event.preventDefault(); onNavigate('/dashboard') }}>
            {!isLogin && <label>Full name<input type="text" placeholder="Your name" required /></label>}
            <label>Email address<input type="email" placeholder="you@example.com" required /></label>
            <label>Password<div className="password-field"><input type={showPassword ? 'text' : 'password'} placeholder="••••••••" required minLength="6" /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button></div></label>
            {isLogin && <div className="form-row"><label className="remember"><input type="checkbox" /> Remember me</label><button type="button" className="text-button">Forgot password?</button></div>}
            <button className="auth-submit" type="submit">{isLogin ? 'Sign in' : 'Create account'} <span>↗</span></button>
          </form>
          <p className="auth-switch">{isLogin ? 'New to AIWithStudy?' : 'Already have an account?'} <button className="text-button" onClick={() => onNavigate(isLogin ? '/signup' : '/login')}>{isLogin ? 'Create an account' : 'Sign in'}</button></p>
        </div>
      </div>
    </main>
  )
}

export function LoginPage(props) { return <AuthPage {...props} mode="login" /> }
export function SignupPage(props) { return <AuthPage {...props} mode="signup" /> }
