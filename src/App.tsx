import './App.css'
import FAQ from './FAQ'
import LastestWork from './Work'
import Companies from './companies'
import Contact from './contact'
import Footer from './footer'
import Landing from './landing'
import Marketing from './markting'
import NavBar from './navbar'
import Services from './services'
import Testimonials from './testimionls'

function App() {
  return (
    <>
    <NavBar />
    <main>
      <Landing />
      <Companies />
      <Services />
      <Marketing />
      <Testimonials />
      <FAQ />
      <LastestWork />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App
