import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0014] via-[#1a0026] to-[#001018]" />

      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fA4LwfT7IUUelEGO/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* CRT scanlines + glow overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-30" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '100% 3px'
      }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,153,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-300 text-xs tracking-widest uppercase mb-4">
            Cyber Retro • CRT Vibes
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_0_20px_rgba(236,72,153,0.35)]">
            Personal Portfolio, Blog, and Docs — all in one cozy retro space
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-2xl">
            Welcome to my corner of the net. Grab a seat by the pink CRT, enjoy the glow,
            and browse my work, thoughts, and technical notes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#about" className="rounded-md bg-fuchsia-500/90 text-black font-semibold px-5 py-2.5 shadow-[0_0_25px_rgba(236,72,153,0.45)] hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] transition-shadow">About me</a>
            <a href="#docs" className="rounded-md border border-cyan-300/40 text-cyan-200 px-5 py-2.5 hover:bg-cyan-300/10 transition-colors">Read docs</a>
          </div>
        </div>
      </div>
    </section>
  )
}
