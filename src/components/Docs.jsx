import { BookOpen, FileText, Layers } from 'lucide-react'

const docs = [
  { title: 'Getting Started', desc: 'How this site is built and how to navigate it', icon: BookOpen },
  { title: 'Design Language', desc: 'CRT textures, purple/yellow palette, and motion rules', icon: Layers },
  { title: 'Tech Stack', desc: 'React, Tailwind, Spline 3D, and other tools', icon: FileText },
  { title: 'Deployment', desc: 'Building, optimizing, and shipping', icon: FileText },
  { title: 'Components', desc: 'Reusable patterns and accessibility notes', icon: Layers },
  { title: 'Changelog', desc: 'What changed and why', icon: FileText },
]

export default function Docs() {
  return (
    <section id="docs" className="relative py-20 bg-[#0a0012]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(234,179,8,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Documentation</h2>
          <a href="#" className="text-yellow-300 text-sm hover:text-white">View all →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map(({ title, desc, icon: Icon }) => (
            <article key={title} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:border-yellow-300/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-yellow-300/10 border border-yellow-300/30 p-2 text-yellow-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-white/75 text-sm leading-relaxed">{desc}</p>
              <button className="mt-5 text-sm font-semibold text-purple-300 hover:text-white">Read more</button>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_20%_0%,rgba(168,85,247,0.22),transparent_60%)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
