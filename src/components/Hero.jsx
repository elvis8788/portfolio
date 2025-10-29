import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const Hero = () => {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    // 更专业的标语轮播
    const texts = [
        'Scalable Web Applications',
        'Component-Driven Architecture',
        'Performance Optimization',
        'User Experience Focus',
        'Modern Frontend Solutions'
    ]

    const typingSpeed = 100
    const deletingSpeed = 50
    const pauseTime = 2000

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
                <div className="max-w-6xl mx-auto">
                    <div className="relative mb-8">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                        <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden border-4 border-white/20">
                            <div className="h-full w-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                <span className="text-5xl font-bold text-white">ES</span>
                            </div>
                        </div>
                    </div>

                    {/* 更新后的标题部分 */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Elvis Song
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-purple-400 font-semibold mb-6">
                        Front End Engineer
                    </h2>

                    <div className="h-12 mb-6">
                        <p className="text-xl md:text-2xl text-slate-300">
                            Building <span className="text-purple-400 font-medium">{displayText}</span><span className="animate-pulse">|</span>
                        </p>
                    </div>

                    <p className="text-xl text-slate-400 max-w-7xl mx-auto mb-10">`
                        With 8 years of experience crafting scalable, responsive single-page applications <b>using React, Vue, and TypeScript.</b>
                        Skilled in building<b>Content Management System (CMS) interfaces, reusable UI component libraries and performance-optimized SPAs.</b>
                        Passionate about performance optimization and creating exceptional user experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="btn-primary"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-secondary"
                        >
                            Get In Touch
                        </button>
                    </div>

                    {/* 技术栈标签 */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {['React', 'Vue', 'TypeScript', 'JavaScript', 'Vite'].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm border border-slate-700/50 text-slate-300"
                            >
                {tech}
              </span>
                        ))}
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