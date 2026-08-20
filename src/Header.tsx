import './Header.css'
import { useState } from 'react'


function Header() {

  const [isDark, setIsDark] = useState(false);

  return (
    <header className='header'>
      <div>
          <h1>MyDay</h1>
          <h2>Good Evening Negar 🖐</h2>
          <p>Plan your day, your way</p>
      </div>
      <button className='theme-button' onClick={() => setIsDark(!isDark)}>
      {isDark ? '🌞' : '🌙'}</button>
      </header>
  )
}

export default Header
