import './App.css'
import AboutUs from './Components/AboutUs/AboutUs'
import Companies from './Components/Companies/Companies'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Products from './Components/Products/Products'
import Section from './Components/Section/Section'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Companies />
      <Section />
      <AboutUs />
      <Products />
      <Footer />
    </>
  )
}

export default App
