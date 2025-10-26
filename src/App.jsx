import { useState, useEffect } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
            <Header />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />

            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                    <ChevronUpIcon className="h-6 w-6" />
                </button>
            )}
        </div>
    )
}

export default App