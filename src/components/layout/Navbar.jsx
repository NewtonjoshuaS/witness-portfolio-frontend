import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Profile', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Qualifications', href: '#qualifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b' : ''}`}
      style={{ borderColor: scrolled ? 'rgba(16,185,129,0.12)' : 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#10b981,#059669)' }}>
            <span className="mono text-white font-bold text-xs">WA</span>
          </div>
          <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: '0.95rem', color: '#e2f0ea' }}>
            Witness Asenga
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map(item => (
            <a key={item.name} href={item.href}
              style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.875rem', fontWeight: 500, color: '#5a8a72' }}
              className="hover:text-emerald-400 transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href="#contact" className="btn-primary px-5 py-2 rounded-lg text-sm">
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setOpen(o => !o)}>
          <span className={`block w-5 h-0.5 bg-emerald-400 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-emerald-400 transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-emerald-400 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height:0,opacity:0 }} animate={{ height:'auto',opacity:1 }} exit={{ height:0,opacity:0 }}
            className="md:hidden overflow-hidden glass border-t" style={{ borderColor:'rgba(16,185,129,0.1)' }}>
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map(item => (
                <a key={item.name} href={item.href} onClick={() => setOpen(false)}
                  style={{ color:'#5a8a72', fontSize:'0.875rem' }} className="hover:text-emerald-400 transition-colors py-1 border-b border-emerald-900/30">
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary px-5 py-2 rounded-lg text-sm text-center mt-1">Hire Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
