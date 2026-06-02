import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const qualifications = [
  { title: 'B.Sc. Data Science (In Progress)', subtitle: 'Pursuing a strong foundation in statistics, machine learning, and data engineering.', icon: '🎓' },
  { title: 'Microsoft Office Proficiency', subtitle: 'Practical experience building reports, presentations, and dashboards using Word, Excel, and PowerPoint.', icon: '🧾' },
  { title: 'Cloud Computing Fundamentals', subtitle: 'Learning deployment and infrastructure concepts using Vercel, Render, and AWS principles.', icon: '☁️' },
  { title: 'Academic Data Projects', subtitle: 'Hands-on coursework on datasets, cleaning, visualization, and data storytelling.', icon: '📈' },
]

export default function Qualifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section id="qualifications" className="py-28 px-6 bg-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-12">
          <div className="section-label mb-3">Qualifications</div>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.02em', color: '#e2f0ea' }}>
            Education, Tools, <span className="gradient-text">Experience</span>
          </h2>
          <p style={{ fontWeight: 300, fontSize: '0.9rem', color: '#5a8a72', marginTop: 10 }}>
            The foundation that supports my work as a student and aspiring data practitioner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {qualifications.map((item, index) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}
              className="glass rounded-3xl p-7"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#e2f0ea' }}>{item.title}</h3>
                </div>
              </div>
              <p style={{ fontWeight: 300, fontSize: '0.92rem', color: '#5a8a72', lineHeight: 1.75 }}>{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
