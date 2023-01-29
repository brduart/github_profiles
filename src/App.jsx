import { Outlet } from 'react-router-dom'
import './App.css'

import AnimatedBackground from './Components/AnimatedBackground'

function App() {

  return (
    <div className="App">
      <Outlet />
      <AnimatedBackground />
    </div>
  )
}

export default App
