import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.7 }} viewport={{ once:true }}
      className="border-t py-10 px-6" style={{ borderColor:'rgba(16,185,129,0.1)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:'linear-gradient(135deg,#10b981,#059669)' }}>
            <span className="mono text-white font-bold text-[10px]">WA</span>
          </div>
          <span style={{ fontWeight:600, fontSize:'0.875rem', color:'#5a8a72' }}>Witness Fratern Asenga</span>
        </div>
        <div className="flex gap-5">
          {[
            { name:'GitHub', href:'https://github.com/WitnessAsenga/my-portfolio' },
            { name:'LinkedIn', href:'http://www.linkedin.com/in/witness-asenga-142974412' },
            { name:'Email', href:'mailto:witnessasenga5@gmail.com' },
          ].map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize:'0.8rem', color:'#3a5a48' }} className="hover:text-emerald-400 transition-colors">{s.name}</a>
          ))}
        </div>
        <p style={{ fontFamily:'JetBrains Mono', fontSize:'0.72rem', color:'#2a4a38' }}>
          © 2026 Witness F. Asenga
        </p>
      </div>
    </motion.footer>
  )
}
