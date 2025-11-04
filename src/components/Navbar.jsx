import { Rocket, User, Book, PenTool } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-yellow-300">
            <Rocket className="h-5 w-5" />
            <span className="font-semibold tracking-wider uppercase text-sm">RetroCRT</span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2">
              <User className="h-4 w-4" /> About
            </a>
            <a href="#docs" className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2">
              <Book className="h-4 w-4" /> Docs
            </a>
            <a href="#blog" className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2">
              <PenTool className="h-4 w-4" /> Blog
            </a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-yellow-300 px-4 py-2 text-black font-semibold shadow-[0_0_20px_rgba(168,85,247,0.45)] hover:shadow-[0_0_30px_rgba(234,179,8,0.55)] transition-shadow"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
