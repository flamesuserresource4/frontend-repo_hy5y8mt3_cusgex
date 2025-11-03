import { BookOpen, FileCog, Rss } from 'lucide-react'

export default function KnowledgeHub() {
  return (
    <section id="hub" className="relative py-20 bg-[#05040a]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.1),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Docs */}
          <a id="docs" href="#docs" className="group block rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-cyan-400/20 p-2 text-cyan-300 border border-cyan-300/30">
                <FileCog className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-white">Documentation</h3>
            </div>
            <p className="mt-2 text-white/75 text-sm">
              Technical notes, setup guides, and deep dives into the stack I use.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {['Getting Started','Design System','Components','Deployment'].map(x => (
                <div key={x} className="rounded-lg border border-white/10 bg-black/40 p-3 text-white/80 group-hover:border-cyan-300/30">
                  {x}
                </div>
              ))}
            </div>
            <span className="mt-5 inline-block text-cyan-200 font-semibold">Browse docs →</span>
          </a>

          {/* Blog */}
          <a id="blog" href="#blog" className="group block rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-fuchsia-400/20 p-2 text-fuchsia-300 border border-fuchsia-300/30">
                <Rss className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-white">Latest Articles</h3>
            </div>
            <p className="mt-2 text-white/75 text-sm">
              Thoughts on design, code, and the art of making internet things.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { title: 'Designing with Glow: The CRT comeback', date: 'Oct 2025' },
                { title: 'Motion as Meaning in Interfaces', date: 'Sep 2025' },
                { title: 'From Pixels to Polygons: My 3D journey', date: 'Aug 2025' }
              ].map((post) => (
                <li key={post.title} className="rounded-lg border border-white/10 bg-black/40 p-4 hover:border-fuchsia-300/30">
                  <div className="flex items-center justify-between">
                    <span className="text-white">{post.title}</span>
                    <span className="text-xs text-white/60">{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
            <span className="mt-5 inline-block text-fuchsia-200 font-semibold">Read the blog →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
