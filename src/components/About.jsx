import { User, Wrench, Sparkles } from 'lucide-react'

export default function About() {
  const services = [
    { title: 'Frontend Engineering', desc: 'React, Vite, TypeScript, performance-first UI.' },
    { title: 'Design Systems', desc: 'Token-driven theming, accessible components.' },
    { title: '3D & Motion', desc: 'Spline, WebGL, subtle motion that serves meaning.' },
    { title: 'Technical Writing', desc: 'Clear docs, tutorials, and developer guides.' },
  ]

  return (
    <section id="about" className="relative py-20 bg-[#0b0014]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <User className="h-5 w-5 text-yellow-300" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">About Me</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(168,85,247,0.25)]">
              <p className="text-white/80 leading-relaxed">
                I build immersive, nostalgic interfaces with a practical twist. My vibe is cyber-retro:
                CRT scanlines, neon highlights, and tactile details. I focus on clarity, performance,
                and delightful micro-interactions.
              </p>
              <p className="mt-4 text-white/80 leading-relaxed">
                The workspace motif features a chunky, typewriter-like keyboard and an old-style monitor.
                The flower vase has been swapped for a tiny pot of chia grass — low-key, chill, and green.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-yellow-300/30 bg-yellow-300/10 p-3 text-yellow-200">Accessibility</div>
                <div className="rounded-lg border border-purple-400/30 bg-purple-400/10 p-3 text-purple-200">Performance</div>
                <div className="rounded-lg border border-yellow-300/30 bg-yellow-300/10 p-3 text-yellow-200">DX Tooling</div>
                <div className="rounded-lg border border-purple-400/30 bg-purple-400/10 p-3 text-purple-200">Animations</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-purple-300" />
                <h3 className="text-xl font-semibold text-white">Expertise & Services</h3>
              </div>
              <div className="mt-5 grid sm:grid-cols-2 gap-5">
                {services.map((s) => (
                  <div key={s.title} className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/40 p-5">
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_0%,rgba(234,179,8,0.18),transparent_60%)]" />
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-medium">{s.title}</h4>
                      <span className="text-[10px] uppercase tracking-wide text-yellow-200 bg-yellow-300/10 border border-yellow-300/30 rounded px-2 py-1">Service</span>
                    </div>
                    <p className="mt-3 text-sm text-white/75">{s.desc}</p>
                    <button className="mt-4 inline-flex items-center gap-2 text-purple-200 hover:text-white transition-colors text-sm">
                      <Sparkles className="h-4 w-4" /> Learn more
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
