import './Header.css'

type HeaderProps = {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

function Header({isDark, setIsDark} : HeaderProps) {
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
