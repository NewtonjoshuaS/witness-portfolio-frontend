import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    icon: '🌐',
    title: 'Personal Portfolio Website',
    category: 'Cloud Computing',
    desc: 'Built and deployed a personal portfolio website using modern web technologies. Hosted the frontend on Vercel and the backend API on Render as part of a Cloud Computing assignment.',
    tags: ['React', 'Vite', 'Vercel', 'Render', 'Node.js'],
    accent: '#10b981',
    link: 'https://github.com/WitnessAsenga/my-portfolio',
    status: 'Deployed',
  },
  {
    icon: '📊',
    title: 'Academic Data Projects',
    category: 'Data Science',
    desc: 'Ongoing academic projects exploring data collection, cleaning, and visualization as part of the Data Science curriculum. Includes exploratory data analysis and statistical interpretation.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Data Cleaning'],
    accent: '#06b6d4',
    link: 'https://github.com/WitnessAsenga',
    status: 'In Progress',
  },
  {
    icon: '📋',
    title: 'Office Skills & Reporting',
    category: 'Productivity',
    desc: 'Created structured reports, presentations, and spreadsheets using Microsoft Office tools for academic and collaborative purposes. Developed proficiency in documentation and data presentation.',
    tags: ['Excel', 'Word', 'PowerPoint', 'Reports'],
    accent: '#34d399',
    link: '#',
    status: 'Ongoing',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce:true, threshold:0.1 })
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.7 }} className="mb-12">
          <div className="section-label mb-3">What I've Built</div>
          <h2 style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'clamp(1.8rem,4vw,3rem)', letterSpacing:'-0.02em', color:'#e2f0ea' }}>
            Projects & <span className="gradient-text">Work</span>
          </h2>
          <p style={{ fontWeight:300, fontSize:'0.9rem', color:'#5a8a72', marginTop:10 }}>
            More projects coming soon as I continue to grow my skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:36 }} whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:i*0.1, ease:[0.22,1,0.36,1] }}
              viewport={{ once:true }}
              whileHover={{ y:-10 }}
              className="glass rounded-2xl overflow-hidden flex flex-col group"
              style={{ borderColor:`${p.accent}20` }}
            >
              <div className="h-1" style={{ background:`linear-gradient(90deg,${p.accent},${p.accent}60)` }} />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <div style={{ fontSize:'2rem' }}>{p.icon}</div>
                  <span className="mono text-[10px] px-2 py-1 rounded-full"
                    style={{ background:`${p.accent}15`, color:p.accent, border:`1px solid ${p.accent}25` }}>
                    {p.status}
                  </span>
                </div>
                <div className="mono text-[10px] mb-1" style={{ color:p.accent }}>{p.category}</div>
                <h3 style={{ fontWeight:700, fontSize:'1rem', color:'#e2f0ea', marginBottom:8 }}>{p.title}</h3>
                <p style={{ fontWeight:300, fontSize:'0.82rem', color:'#5a8a72', lineHeight:1.65, flexGrow:1 }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 my-4">
                  {p.tags.map(t => (
                    <span key={t} className="mono text-[10px] px-2 py-0.5 rounded-full"
                      style={{ background:`${p.accent}10`, color:`${p.accent}cc`, border:`1px solid ${p.accent}20` }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 mt-auto pt-3 border-t"
                  style={{ color:p.accent, borderColor:`${p.accent}15` }}>
                  View Project
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
