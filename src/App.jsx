import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Docs from './components/Docs'
import Blog from './components/Blog'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['IBM_Plex_Sans','Inter','system-ui']">
      {/* Global CRT background texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05]" style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.7) 0, rgba(255,255,255,0.7) 1px, transparent 2px, transparent 4px)'
      }} />

      <Navbar />
      <Hero />
      <About />
      <Docs />
      <Blog />

      <footer id="contact" className="relative border-t border-white/10 bg-[#06000a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">© {new Date().getFullYear()} RetroCRT — Crafted with glow and grit.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#about" className="text-white/70 hover:text-white">About</a>
              <a href="#docs" className="text-white/70 hover:text-white">Docs</a>
              <a href="#blog" className="text-white/70 hover:text-white">Blog</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
