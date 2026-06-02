import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mb-16">
          <div className="section-label mb-3">Personal Profile</div>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.02em', color: '#e2f0ea' }} className="mb-5">
            A thoughtful learner with a passion for <span className="gradient-text">data-driven impact.</span>
          </h2>
          <p style={{ fontWeight: 300, fontSize: '0.95rem', color: '#5a8a72', maxWidth: 640, lineHeight: 1.75 }}>
            I am a Data Science student focused on building practical skills in data analysis, cloud deployment, and collaborative problem solving.
            My work is grounded in structured thinking, clear communication, and a desire to transform raw information into meaningful outcomes.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}
            className="glass rounded-3xl p-8">
            <div className="section-label mb-2">Highlights</div>
            <ul className="space-y-3" style={{ color: '#b0d4bf' }}>
              <li>• Strong foundation in data science concepts, with active learning in statistics and machine learning.</li>
              <li>• Practical experience building portfolio UI, backend APIs, and deployment workflows.</li>
              <li>• Committed to growth through academic work, team projects, and continuous learning.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}
            className="glass rounded-3xl p-8">
            <div className="section-label mb-2">Values</div>
            <ul className="space-y-3" style={{ color: '#b0d4bf' }}>
              <li>• Collaboration first: I work best with people who share ideas and iterate together.</li>
              <li>• Continuous learning: I value feedback, training, and hands-on experience.</li>
              <li>• Problem solving: I approach technical challenges methodically and creatively.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
