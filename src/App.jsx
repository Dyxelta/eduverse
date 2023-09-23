import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import Demo from './components/Demo.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Reviews />
      <Demo />
      <Footer />      
    </div>
  )
}

export default App
