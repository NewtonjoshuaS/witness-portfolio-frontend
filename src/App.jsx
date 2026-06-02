import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Qualifications from './components/sections/Qualifications'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)', top:'-10%', right:'-5%', animation:'float 12s ease-in-out infinite' }} />
        <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)', bottom:'10%', left:'-8%', animation:'float 15s ease-in-out infinite', animationDelay:'-6s' }} />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Qualifications />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
