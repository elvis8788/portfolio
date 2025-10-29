import { useState, useEffect, useRef } from 'react'

const Experience = () => {
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

    const experiences = [
        {
            title: 'Front End Engineer',
            company: 'Zyaud Technology Ltd.',
            period: 'Mar 2020 - Aug 2025',
            description: [
                'Designed and implemented the Project Analysis & Comparison function supporting multi-dimensional data.',
                'Implemented an Offline Map Real-time Monitoring feature to address geospatial visualization needs.',
                'Collaborated closely with Product Managers in requirement analysis and solution design.',
                'Utilized Webpack for modular bundling, code splitting, and performance optimization.'
            ]
        },
        {
            title: 'Website Administrator',
            company: '38Fule Corporation Ltd.',
            period: 'Nov 2019 - Jul 2020',
            description: [
                'Managed the full lifecycle of the company website.',
                'Designed, deployed, configured, and maintained the backend SQL Server.',
                'Implemented database backup strategies and disaster recovery plans.',
                'Addressed website and database-related issues, errors, and performance.'
            ]
        },
        {
            title: 'Front End Engineer',
            company: 'Evilnut Creative Technology Ltd.',
            period: 'Jan 2015 - Sep 2019',
            description: [
                'Developed frontend functionalities and visual effects for internal projects and the official company website.',
                'Maintained and optimized performance, user experience, and responsive layouts.',
                'Ensured website security through regular updates and maintenance.',
                'Customized and delivered SDK source files and libraries based on project requirements.'
            ]
        }
    ]

    return (
        <section id="experience" ref={sectionRef} className="py-20 px-4 bg-slate-800/20">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Work Experience</h2>
                <p className="text-slate-400 text-center max-w-3xl mx-auto mb-12">
                    Over 8 years of professional experience in front-end development and web application technologies.
                </p>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`mb-12 transition-all duration-700 transform ${
                                isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-10 opacity-0' : 'translate-x-10 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3 mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                    <p className="text-purple-400 font-medium">{exp.company}</p>
                                    <p className="text-slate-400 text-sm mt-1">{exp.period}</p>
                                </div>
                                <div className="md:w-2/3 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                                                <span className="text-slate-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience