import { useState, useEffect, useRef } from 'react'

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    const skillCategories = [
        {
            title: 'Front-End Frameworks/Libraries',
            skills: ['React.js', 'Vue.js', 'TypeScript', 'ES6+'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Build Tools',
            skills: ['Vite', 'Webpack', 'Babel'],
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: 'State Management',
            skills: ['Redux', 'Vuex', 'Pinia'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'UI/Styling',
            skills: ['CSS', 'SCSS/SASS', 'Bootstrap', 'Tailwind CSS', 'Element UI', 'Ant Design'],
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'Tools & Others',
            skills: ['Git', 'GitHub', 'GitLab', 'RESTful APIs', 'Performance Optimization'],
            color: 'from-yellow-500 to-amber-500'
        }
    ]

    return (
        <section id="skills" ref={sectionRef} className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
                <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
                    I've worked with a variety of technologies in the web development world, specializing in front-end development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 transition-all duration-500 transform ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 bg-slate-700/50 rounded-full text-sm border border-slate-600/50"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-12 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <h3 className="text-2xl font-semibold mb-4 text-center">Performance Focus</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                            <span>Code Splitting</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                            <span>Lazy Loading</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                            <span>Component-based Architecture</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <span>Cross-browser Compatibility</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills