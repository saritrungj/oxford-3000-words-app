import { useState } from 'react'
import Header from './components/Header/Header'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <div className={darkMode && "dark"}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
          <Header />
        </div>
      </div>
    </>
  )
}

export default App
