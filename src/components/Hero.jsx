import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const Hero = () => {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const texts = ['Frontend Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Creative Thinker']
    const typingSpeed = 100
    const deletingSpeed = 50
    const pauseTime = 1500

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[currentIndex]

            if (!isDeleting) {
                if (displayText.length < currentText.length) {
                    setTimeout(() => {
                        setDisplayText(currentText.substring(0, displayText.length + 1))
                    }, typingSpeed)
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime)
                }
            } else {
                if (displayText.length > 0) {
                    setTimeout(() => {
                        setDisplayText(currentText.substring(0, displayText.length - 1))
                    }, deletingSpeed)
                } else {
                    setIsDeleting(false)
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
                }
            }
        }

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)
        return () => clearTimeout(timer)
    }, [displayText, isDeleting, currentIndex, texts])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="relative mb-8">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                        <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden border-4 border-white/20">
                            <div className="h-full w-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                <span className="text-5xl font-bold text-white">ES</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Elvis Song</span>
                    </h1>

                    <div className="h-12 mb-6">
                        <h2 className="text-2xl md:text-4xl font-semibold text-slate-300">
                            {displayText}<span className="animate-pulse">|</span>
                        </h2>
                    </div>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                        With over 8 years of experience crafting scalable, responsive single-page applications using React, Vue, and TypeScript.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-3 border border-purple-500 text-purple-300 rounded-lg font-medium hover:bg-purple-900/30 transition-all duration-300 transform hover:scale-105"
                        >
                            Get In Touch
                        </button>
                    </div>

                    <button
                        onClick={() => scrollToSection('skills')}
                        className="animate-bounce text-slate-400 hover:text-white transition-colors"
                    >
                        <ChevronDownIcon className="h-8 w-8 mx-auto" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero