import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { isDarkMode } = useTheme();
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        {
            icon: FaGithub,
            url: 'https://github.com/chathuramd',
            label: 'GitHub',
            hoverColor: '#333333'
        },
        {
            icon: FaLinkedin,
            url: 'https://www.linkedin.com/in/chathura-dematapitiya-50a690275',
            label: 'LinkedIn',
            hoverColor: '#0077b5'
        },
        {
            icon: FaFacebook,
            url: 'https://www.facebook.com/chathura.madhusanka.7393/',
            label: 'Facebook',
            hoverColor: '#1877f2'
        },
        {
            icon: FaInstagram,
            url: 'https://www.instagram.com/chathuz_md__',
            label: 'Instagram',
            hoverColor: '#E4405F'
        },
        {
            icon: FaEnvelope,
            url: 'mailto:contact@chathuxmd.com',
            label: 'Email',
            hoverColor: '#ea4335'
        },
    ];

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <footer className="glass-effect mt-20 border-t border-white/10 relative overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-gradient"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Brand Section with Enhanced Animation */}
                        <div className="space-y-4 animate-fade-in">
                            <h3 className="text-2xl font-bold gradient-text relative inline-block group cursor-pointer">
                                Chathux Md
                                {/* Animated underline with glow */}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-purple-500/50"></span>
                                {/* Pulsing dot */}
                                <span className="absolute -top-1 -right-2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></span>
                            </h3>
                            <p className={`text-sm leading-relaxed transition-all duration-300 hover:translate-x-1 ${isDarkMode ? 'text-gray-300 hover:text-gray-200' : 'text-gray-700 hover:text-gray-600'
                                }`}>
                                Building amazing digital experiences with modern web technologies.
                            </p>
                            {/* Animated decorative line */}
                            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-500 hover:w-32 hover:shadow-lg hover:shadow-purple-500/50"></div>
                        </div>

                        {/* Quick Links with Enhanced Hover Effects */}
                        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <h4 className={`text-lg font-semibold transition-all duration-300 hover:translate-x-1 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <li key={link.name} style={{ animationDelay: `${index * 50}ms` }}>
                                        <Link
                                            to={link.path}
                                            className={`text-sm transition-all duration-300 relative inline-block group ${isDarkMode
                                                    ? 'text-gray-300 hover:text-cyan-400'
                                                    : 'text-gray-700 hover:text-purple-600'
                                                }`}
                                        >
                                            {/* Hover background glow */}
                                            <span className="absolute -inset-x-2 -inset-y-1 rounded-md bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300 -z-10"></span>

                                            <span className="relative">
                                                {link.name}
                                                {/* Animated underline with glow */}
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 group-hover:shadow-md group-hover:shadow-cyan-400/50"></span>
                                            </span>

                                            {/* Sliding arrow with bounce */}
                                            <span className="inline-block ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 group-hover:animate-bounce">→</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Links with Real Brand Colors */}
                        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                Connect
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group"
                                        aria-label={social.label}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {/* Main Icon Container with 3D Effect */}
                                        <div className={`relative p-4 rounded-xl transition-all duration-500 transform ${isDarkMode ? 'bg-white/5' : 'bg-black/5'
                                            } group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3`}>

                                            {/* Rotating Gradient Border */}
                                            <div
                                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                style={{
                                                    background: `conic-gradient(from 0deg, ${social.hoverColor}, transparent, ${social.hoverColor})`,
                                                    padding: '2px',
                                                    animation: 'spin 3s linear infinite'
                                                }}
                                            >
                                                <div className={`w-full h-full rounded-xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'
                                                    }`}></div>
                                            </div>

                                            {/* Icon with Color Transition */}
                                            <social.icon
                                                className="text-2xl transition-all duration-500 relative z-10 group-hover:scale-125 group-hover:rotate-12"
                                                style={{
                                                    color: isDarkMode ? '#d1d5db' : '#374151',
                                                    filter: 'drop-shadow(0 0 0px transparent)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.color = social.hoverColor;
                                                    e.currentTarget.style.filter = `drop-shadow(0 0 8px ${social.hoverColor})`;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.color = isDarkMode ? '#d1d5db' : '#374151';
                                                    e.currentTarget.style.filter = 'drop-shadow(0 0 0px transparent)';
                                                }}
                                            />

                                            {/* Pulsing Glow Effect */}
                                            <div
                                                className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 animate-pulse"
                                                style={{ backgroundColor: social.hoverColor }}
                                            ></div>

                                            {/* Background Shine Effect */}
                                            <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div
                                                    className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                                                    style={{
                                                        background: `linear-gradient(90deg, transparent, ${social.hoverColor}40, transparent)`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Enhanced Tooltip with Arrow */}
                                        <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                            <div
                                                className="px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg"
                                                style={{
                                                    backgroundColor: social.hoverColor,
                                                    color: '#ffffff'
                                                }}
                                            >
                                                {social.label}
                                                {/* Tooltip Arrow */}
                                                <div
                                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                                                    style={{ backgroundColor: social.hoverColor }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Ripple Effect on Hover */}
                                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div
                                                className="absolute inset-0 rounded-xl animate-ping"
                                                style={{
                                                    backgroundColor: social.hoverColor,
                                                    opacity: 0.2
                                                }}
                                            ></div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar with Animation */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className={`text-sm text-center md:text-left flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                © {currentYear} Chathux Md. All rights reserved.
                            </p>
                            <div className="flex items-center gap-4">
                                <p className={`text-xs text-center md:text-right ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                                    Developed by{' '}
                                    <span className="text-primary-400 font-semibold">Shanuka Induran</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all duration-300 z-50 group ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
                    }`}
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
                aria-label="Scroll to top"
            >
                {/* Glow effect */}
                <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-gradient-to-r from-purple-500 to-pink-500"></span>

                {/* Icon with bounce animation */}
                <FaArrowUp className="text-white text-xl relative z-10 transition-transform duration-300 group-hover:-translate-y-1" />

                {/* Ripple effect on hover */}
                <span className="absolute inset-0 rounded-full border-2 border-white/50 scale-100 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-500"></span>
            </button>
        </>
    );
};

export default Footer;
