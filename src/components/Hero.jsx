import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0013] via-[#120021] to-[#111017]" />

      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* CRT scanlines + glow overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-30" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
        backgroundSize: '100% 3px'
      }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full border border-yellow-300/40 bg-yellow-300/10 text-yellow-200 text-xs tracking-widest uppercase mb-4">
            Cyber Retro • Purple & Yellow
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_0_22px_rgba(168,85,247,0.35)]">
            A playful retro workspace — typewriter keyboard, CRT glow, and neon data
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-2xl">
            Pull up to the grey-black desk, tap on the typewriter-like keys, and watch the green
            neon flicker on the old-school monitor. Yes, the flower vase is gone — were rocking a
            tiny pot of chia grass now.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#about" className="rounded-md bg-purple-500/90 text-black font-semibold px-5 py-2.5 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-shadow">About me</a>
            <a href="#docs" className="rounded-md border border-yellow-300/50 text-yellow-200 px-5 py-2.5 hover:bg-yellow-300/10 transition-colors">Read docs</a>
          </div>
        </div>
      </div>
    </section>
  )
}
