import Nav from './components/Nav'
import Hero from './components/Hero'
import { Marquee, Films } from './components/Work'
import { Statement, Services, Process } from './components/Sections'
import { Pricing, CTA, Footer } from './components/Closing'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-espresso">
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Films />
        <Statement />
        <Services />
        <Process />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
