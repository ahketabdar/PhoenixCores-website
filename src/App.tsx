
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Hero from "./pages/Hero"
import Contact from './pages/Contact'
import Footer from './Components/Footer'
import About from './pages/About'
import Articles from './pages/Articles'


function App() {
  

  return(
    
    <BrowserRouter>
      <Navbar />

      

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Articles" element={<Articles />} />
        
      </Routes>
      

      <Footer />
    </BrowserRouter> 
    
      
      
    
  )
}
export default App

