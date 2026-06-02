import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import axios from 'axios'

const API_ROOT = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || ''

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState('idle')
  const [ref, inView] = useInView({ triggerOnce:true, threshold:0.1 })

  const send = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    try {
      await axios.post(`${API_ROOT}/api/messages`, form)
      setStatus('success')
      setForm({ name:'', email:'', message:'' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }} className="mb-12">
          <div className="section-label mb-3">Get In Touch</div>
          <h2 style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'clamp(1.8rem,4vw,3rem)', letterSpacing:'-0.02em', color:'#e2f0ea' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1,x:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}
            className="space-y-4">
            {[
              { label:'Email', val:'witnessasenga5@gmail.com', href:'mailto:witnessasenga5@gmail.com', icon:'✉️' },
              { label:'Phone', val:'+255 068 464 9131', href:'tel:+255684649131', icon:'📞' },
              { label:'LinkedIn', val:'witness-asenga', href:'http://www.linkedin.com/in/witness-asenga-142974412', icon:'💼' },
              { label:'GitHub', val:'WitnessAsenga', href:'https://github.com/WitnessAsenga', icon:'🐙' },
            ].map((c,i) => (
              <motion.a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ x:5 }}
                className="flex items-center gap-4 glass rounded-xl p-4" style={{ textDecoration:'none' }}>
                <span style={{ fontSize:'1.3rem' }}>{c.icon}</span>
                <div>
                  <div className="section-label" style={{ fontSize:'0.6rem', marginBottom:2 }}>{c.label}</div>
                  <div style={{ fontWeight:500, fontSize:'0.85rem', color:'#b0d4bf' }}>{c.val}</div>
                </div>
              </motion.a>
            ))}
            <div className="glass rounded-xl p-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow:'0 0 8px #10b981', animation:'pulse 2s infinite' }} />
              <span style={{ fontSize:'0.82rem', color:'#5a8a72' }}>Open to internships & collaborations</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1,x:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}
            className="glass rounded-2xl p-6 relative">
            <AnimatePresence>
              {status === 'success' && (
                <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                  className="absolute inset-0 glass rounded-2xl flex flex-col items-center justify-center z-10 gap-3">
                  <span style={{ fontSize:'2.5rem' }}>✅</span>
                  <p style={{ fontWeight:700, color:'#10b981' }}>Message Sent!</p>
                  <p style={{ fontSize:'0.8rem', color:'#5a8a72' }}>I'll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              {[['Name','name','text','Your name'],['Email','email','email','your@email.com']].map(([l,n,t,ph]) => (
                <div key={n}>
                  <label className="section-label block mb-1.5" style={{ fontSize:'0.6rem' }}>{l}</label>
                  <input name={n} type={t} placeholder={ph} value={form[n]}
                    onChange={e => setForm({...form,[n]:e.target.value})}
                    className="field-input w-full px-4 py-2.5 rounded-xl text-sm" />
                </div>
              ))}
              <div>
                <label className="section-label block mb-1.5" style={{ fontSize:'0.6rem' }}>Message</label>
                <textarea name="message" rows={4} placeholder="Tell me about your project or inquiry..."
                  value={form.message} onChange={e => setForm({...form,message:e.target.value})}
                  className="field-input w-full px-4 py-2.5 rounded-xl text-sm resize-none" />
              </div>
              {status === 'error' && <p style={{ color:'#f87171', fontSize:'0.8rem' }}>Something went wrong. Try again.</p>}
              <motion.button onClick={send} disabled={status==='loading'}
                whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
                className="btn-primary w-full py-3 rounded-xl text-sm disabled:opacity-50">
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
