import { CalendarDays, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Why purple + yellow screams retro-tech in 2025',
    date: 'Oct 2025',
    excerpt: 'A study in contrast: warm yellow accents against deep purple shadows for cozy CRT vibes.',
  },
  {
    title: 'Building a typewriter-style keyboard scene with Spline',
    date: 'Sep 2025',
    excerpt: 'Tips on lighting, materials, and camera for chunky keycaps and tactile depth.',
  },
  {
    title: 'Good glow, bad glow: motion and readability',
    date: 'Aug 2025',
    excerpt: 'Balancing bloom, saturation, and contrast so interfaces stay readable and fast.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="relative py-20 bg-[#090016]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.18),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Blog</h2>
          <a href="#" className="text-purple-300 text-sm hover:text-white">Browse all →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:border-purple-300/40 transition-colors">
              <div className="flex items-center gap-2 text-white/70 text-xs">
                <CalendarDays className="h-4 w-4" /> {p.date}
              </div>
              <h3 className="mt-3 text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-white/75 text-sm leading-relaxed">{p.excerpt}</p>
              <button className="mt-5 inline-flex items-center gap-2 text-yellow-200 hover:text-white text-sm font-semibold">
                Read article <ArrowRight className="h-4 w-4" />
              </button>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_80%_0%,rgba(234,179,8,0.22),transparent_60%)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
