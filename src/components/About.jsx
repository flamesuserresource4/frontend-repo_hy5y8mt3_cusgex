export default function About() {
  return (
    <section id="about" className="relative py-20 bg-[#0b0014]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(236,72,153,0.2)]">
              <h2 className="text-2xl font-bold text-white">About Me</h2>
              <p className="mt-3 text-white/80 leading-relaxed">
                I craft interfaces and systems that feel nostalgic yet modern. I love
                retro tech, neon palettes, and building immersive web experiences with
                delightful details.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-white/80">Design Systems</div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-white/80">Frontend Engineering</div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-white/80">WebGL & 3D</div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-white/80">Technical Writing</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Featured Work</h3>
              <div className="mt-5 grid sm:grid-cols-2 gap-5">
                {[
                  { title: 'Neon Terminal UI', tag: 'Open Source' },
                  { title: 'CRT Dashboard', tag: 'Design' },
                  { title: 'Retro Blog Theme', tag: 'Theme' },
                  { title: '3D Workspace', tag: 'Experiment' },
                ].map((item) => (
                  <div key={item.title} className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/40 p-5">
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_0%,rgba(34,211,238,0.2),transparent_60%)]" />
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <span className="text-[10px] uppercase tracking-wide text-fuchsia-300 bg-fuchsia-500/10 border border-fuchsia-300/30 rounded px-2 py-1">{item.tag}</span>
                    </div>
                    <p className="mt-3 text-sm text-white/70">
                      A retro-styled project with scanline textures, soft bloom, and
                      delightful interactions.
                    </p>
                    <button className="mt-4 text-sm font-semibold text-cyan-200 hover:text-white transition-colors">View project →</button>
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
