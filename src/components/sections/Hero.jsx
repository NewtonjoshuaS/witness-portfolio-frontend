import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = ['Data Science Student', 'Cloud Computing Learner', 'Data Analyst in Training', 'Team Collaborator']

function Typed({ words }) {
  const [idx, setIdx] = useState(0)
  const [sub, setSub] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const word = words[idx]
    const t = setTimeout(() => {
      if (!del && sub === word.length) { setTimeout(() => setDel(true), 1600); return }
      if (del && sub === 0) { setDel(false); setIdx(i => (i+1)%words.length); return }
      setSub(s => s + (del ? -1 : 1))
    }, del ? 45 : 85)
    return () => clearTimeout(t)
  }, [sub, del, idx, words])
  return <span>{words[idx].substring(0, sub)}<span className="cursor">|</span></span>
}

const stagger = { hidden:{}, show:{ transition:{ staggerChildren:0.12, delayChildren:0.15 } } }
const item = { hidden:{ opacity:0, y:24 }, show:{ opacity:1, y:0, transition:{ duration:0.65, ease:[0.22,1,0.36,1] } } }

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 relative">
      {/* Terminal-style eyebrow */}
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl mx-auto text-center w-full">
        <motion.div variants={item} className="flex items-center justify-center gap-2 mb-6">
          <span className="mono text-emerald-500 text-sm">$</span>
          <span className="mono text-emerald-400/60 text-sm">whoami</span>
          <span className="mono text-emerald-500/40 text-sm ml-2">→ data_scientist</span>
        </motion.div>

        <motion.h1 variants={item}
          style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'clamp(2.2rem,6vw,4.5rem)', lineHeight:1.1, letterSpacing:'-0.02em', color:'#e2f0ea' }}
          className="mb-3"
        >
          Witness Fratern <span className="gradient-text">Asenga</span>
        </motion.h1>

        <motion.p variants={item} className="mono text-lg mb-4" style={{ color:'#10b981', height:28 }}>
          <Typed words={roles} />
        </motion.p>

        <motion.p variants={item} style={{ fontWeight:300, fontSize:'1rem', color:'#5a8a72', maxWidth:520, margin:'0 auto 2.5rem', lineHeight:1.75 }}>
          I am a Data Science student with a strong interest in using data to solve real-world problems — building my foundation in data analysis, cloud computing, and software development.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3 justify-center mb-14">
          <motion.a href="#projects" whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
            className="btn-primary px-7 py-3 rounded-xl text-sm">
            View Projects
          </motion.a>
          <motion.a href="https://github.com/WitnessAsenga/my-portfolio" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
            className="btn-outline px-7 py-3 rounded-xl text-sm flex items-center gap-2">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </motion.a>
          <motion.a href="http://www.linkedin.com/in/witness-asenga-142974412" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
            className="btn-outline px-7 py-3 rounded-xl text-sm">
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[['📊','Data Science','Pursuing B.Sc.'],['☁️','Cloud','Learning AWS'],['🤝','Team Player','Collaborator']].map(([icon, label, sub], i) => (
            <motion.div key={i} whileHover={{ y:-5 }}
              className="glass rounded-2xl p-4 text-center">
              <div style={{ fontSize:'1.6rem', marginBottom:4 }}>{icon}</div>
              <div style={{ fontWeight:700, fontSize:'0.8rem', color:'#10b981' }}>{label}</div>
              <div style={{ fontSize:'0.65rem', color:'#3a6a52', marginTop:2 }}>{sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1, y:[8,0,8] }} transition={{ delay:1.5, duration:2.5, repeat:Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="mono text-[10px] text-emerald-900/60 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-emerald-500/50 to-transparent" />
      </motion.div>
    </section>
  )
}
