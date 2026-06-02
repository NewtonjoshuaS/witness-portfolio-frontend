import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { icon: '💻', title: 'Microsoft Office', desc: 'Word, Excel, PowerPoint — proficient in creating documents, reports, and data-driven presentations.', level: 'Proficient', color: '#10b981' },
  { icon: '🤝', title: 'Teamwork', desc: 'Strong collaborator who values communication, shared goals, and group success on academic and professional projects.', level: 'Strong', color: '#34d399' },
  { icon: '📊', title: 'Data Analysis', desc: 'Developing skills in understanding, cleaning, and interpreting datasets as part of my Data Science curriculum.', level: 'Learning', color: '#06b6d4' },
  { icon: '☁️', title: 'Cloud Computing', desc: 'Currently learning cloud infrastructure and deployment workflows — AWS, Vercel, Render, and related platforms.', level: 'Learning', color: '#0ea5e9' },
]

function SkillBar({ level, color }) {
  const pct = level === 'Proficient' ? 78 : level === 'Strong' ? 85 : 42
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 })
  return (
    <div ref={ref} className="mt-3">
      <div className="flex justify-between mb-1">
        <span className="mono text-[10px]" style={{ color: '#3a6a52' }}>proficiency</span>
        <span className="mono text-[10px]" style={{ color }}>{level}</span>
      </div>
      <div className="h-1 rounded-full bg-white/5">
        <motion.div initial={{ width: 0 }} animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full" style={{ background: `linear-gradient(90deg,${color},${color}80)` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="section-label mb-3">Skills Overview</div>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.02em', color: '#e2f0ea' }}>
            Technical & Soft <span className="gradient-text">Skills</span>
          </h2>
          <p style={{ fontWeight: 300, fontSize: '0.9rem', color: '#5a8a72', marginTop: 10 }}>
            A clear view of the skills I bring to collaborative data science and cloud-focused projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <motion.div key={skill.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}
              className="glass rounded-2xl p-6"
            >
              <div style={{ fontSize: '2rem', marginBottom: 10 }}>{skill.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#e2f0ea', marginBottom: 8 }}>{skill.title}</div>
              <p style={{ fontWeight: 300, fontSize: '0.82rem', color: '#5a8a72', lineHeight: 1.65 }}>{skill.desc}</p>
              <SkillBar level={skill.level} color={skill.color} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
