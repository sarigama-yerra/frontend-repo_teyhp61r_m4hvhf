import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 right-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
