const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-8 px-4 border-t border-slate-700/50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <span className="font-bold text-white text-sm">ES</span>
                            </div>
                            <span className="text-lg font-bold">Elvis Song</span>
                        </div>
                        <p className="text-slate-400 text-sm mt-1">Frontend Developer</p>
                    </div>

                    <div className="text-slate-400 text-sm">
                        <p>&copy; {currentYear} Elvis Song. All rights reserved.</p>
                    </div>

                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a
                            href="mailto:tesong8788@gmail.com"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            Email
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer