import { useState } from 'react';
import Header from './Header.tsx' ;
import Task from './Task.tsx'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'app dark' : 'app'}>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      <Task />
    </div>
  )
}

export default App
