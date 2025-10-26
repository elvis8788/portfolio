import { useState, useRef, useEffect } from 'react'
import { EnvelopeIcon, MapPinIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // In a real application, you would send the form data to a backend
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <section id="contact" ref={sectionRef} className="py-20 px-4 bg-slate-800/20">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
                <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
                    I'm always open to discussing new opportunities and interesting projects.
                </p>

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className={`lg:w-2/5 transition-all duration-700 ${
                            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                        }`}>
                            <h3 className="text-2xl font-semibold mb-6">Let's talk about everything!</h3>
                            <p className="text-slate-300 mb-8">
                                Whether you have a project in mind, want to collaborate, or just want to say hello,
                                I'd love to hear from you. Feel free to reach out using the contact form or through
                                any of the methods below.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <EnvelopeIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Email</h4>
                                        <p className="text-slate-300">tesong8788@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Location</h4>
                                        <p className="text-slate-300">Vancouver, British Columbia</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <DevicePhoneMobileIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Phone</h4>
                                        <p className="text-slate-300">Available upon request</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`lg:w-3/5 transition-all duration-700 ${
                            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`} style={{ transitionDelay: '300ms' }}>
                            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-slate-300 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-slate-300 mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-slate-300 mb-2">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        placeholder="Hello, I would like to talk about..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact