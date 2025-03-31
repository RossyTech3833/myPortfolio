
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './component/Home'
import './index.css'
import Mobilemenu from './Mobilemenu'
import About from './component/About'
import Services from './component/Services'
import Contact from './component/Contact'
import Footer from './component/Footer'





function App() {
const[menuOpen, setMenuopen] = useState(false)

  return (
    <>
    <Navbar  menuOpen={menuOpen} setMenuopen={setMenuopen}/>
    <Mobilemenu menuOpen={menuOpen} setMenuopen={setMenuopen}/>
     <Home/>
     <About/>
     <Services/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
