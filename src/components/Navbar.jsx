import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaRegLightbulb, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { isDarkMode, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
                {/* Glassmorphism Background with Gradient Border */}
                <div className={`absolute inset-0 ${isDarkMode
                    ? 'bg-gradient-to-r from-black/40 via-black/30 to-black/40'
                    : 'bg-gradient-to-r from-white/40 via-white/30 to-white/40'
                    } backdrop-blur-2xl`}></div>

                {/* Gradient Border Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

                {/* Subtle Top Glow */}
                <div className={`absolute top-0 left-0 right-0 h-px ${isDarkMode ? 'bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent' : 'bg-gradient-to-r from-transparent via-purple-400/30 to-transparent'
                    }`}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/" className="relative group">
                            <span className={`text-2xl font-bold transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                Chathux <span className="gradient-text">Md</span>
                            </span>
                            {/* Animated underline */}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {/* Nav Links */}
                            <div className="flex space-x-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${isActive(link.path)
                                                ? 'text-white'
                                                : isDarkMode
                                                    ? 'text-gray-300 hover:text-white'
                                                    : 'text-gray-700 hover:text-gray-900'
                                            }`}
                                    >
                                        {/* Active/Hover background with glow */}
                                        <span className={`absolute inset-0 rounded-lg transition-all duration-500 ${isActive(link.path)
                                                ? 'bg-gradient-to-r from-cyan-500/25 to-purple-500/25 backdrop-blur-sm shadow-lg shadow-purple-500/30'
                                                : 'bg-white/0 group-hover:bg-gradient-to-r group-hover:from-white/10 group-hover:to-white/5 group-hover:shadow-md group-hover:shadow-cyan-500/20'
                                            }`}></span>

                                        {/* Magnetic hover effect */}
                                        <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 blur-xl"></span>

                                        {/* Text with scale on hover */}
                                        <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 inline-block">{link.name}</span>

                                        {/* Animated underline with glow */}
                                        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 ${isActive(link.path)
                                                ? 'w-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-purple-500/50'
                                                : 'w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:shadow-md group-hover:shadow-cyan-400/50'
                                            }`}></span>

                                        {/* Pulsing dot for active link */}
                                        {isActive(link.path) && (
                                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></span>
                                        )}
                                    </Link>
                                ))}
                            </div>

                            {/* Enhanced Sliding Theme Toggle Switch */}
                            <button
                                onClick={toggleTheme}
                                className={`relative w-16 h-8 rounded-full transition-all duration-500 group hover:scale-110 ${isDarkMode ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-gradient-to-r from-orange-400 to-yellow-400'
                                    }`}
                                aria-label="Toggle theme"
                            >
                                {/* Pulsing glow ring */}
                                <span className={`absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 animate-pulse ${isDarkMode ? 'bg-purple-500' : 'bg-yellow-400'
                                    }`}></span>

                                {/* Rotating gradient border */}
                                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                                    background: `conic-gradient(from 0deg, ${isDarkMode ? '#8b5cf6, transparent, #8b5cf6' : '#fbbf24, transparent, #fbbf24'
                                        })`,
                                    padding: '2px',
                                    animation: 'spin 3s linear infinite'
                                }}>
                                    <div className="w-full h-full rounded-full bg-transparent"></div>
                                </span>

                                {/* Sliding circle with enhanced shadow */}
                                <span className={`absolute top-1 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-all duration-500 transform ${isDarkMode ? 'left-1' : 'left-9'
                                    } group-hover:scale-125 group-hover:rotate-12 shadow-lg group-hover:shadow-xl ${isDarkMode ? 'group-hover:shadow-purple-500/50' : 'group-hover:shadow-yellow-400/50'
                                    }`}>
                                    {isDarkMode ? (
                                        <FaMoon className="text-indigo-600 text-xs transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" />
                                    ) : (
                                        <FaRegLightbulb className="text-yellow-500 text-xs transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" />
                                    )}
                                </span>

                                {/* Background icons */}
                                <span className={`absolute left-2 top-1/2 -translate-y-1/2 transition-all duration-500 ${isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                                    }`}>
                                    <FaMoon className="text-white/40 text-xs" />
                                </span>
                                <span className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-500 ${isDarkMode ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                                    }`}>
                                    <FaRegLightbulb className="text-white/60 text-xs" />
                                </span>
                            </button>
                        </div>

                        {/* Mobile menu button and theme toggle */}
                        <div className="md:hidden flex items-center space-x-4">
                            {/* Mobile Theme Toggle - Sliding Switch */}
                            <button
                                onClick={toggleTheme}
                                className={`relative w-14 h-7 rounded-full transition-all duration-500 group ${isDarkMode ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-gradient-to-r from-orange-400 to-yellow-400'
                                    }`}
                                aria-label="Toggle theme"
                            >
                                {/* Sliding circle with icon */}
                                <span className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 transform ${isDarkMode ? 'left-0.5' : 'left-7'
                                    }`}>
                                    {isDarkMode ? (
                                        <FaMoon className="text-indigo-600 text-xs" />
                                    ) : (
                                        <FaRegLightbulb className="text-yellow-500 text-xs" />
                                    )}
                                </span>
                            </button>

                            {/* Advanced Hamburger Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`relative w-10 h-10 rounded-lg transition-all duration-300 flex items-center justify-center ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'
                                    }`}
                                aria-label="Toggle menu"
                            >
                                <div className="relative w-6 h-5 flex flex-col justify-center items-center">
                                    {/* Top line */}
                                    <span className={`absolute w-6 h-0.5 transition-all duration-300 ${isDarkMode ? 'bg-white' : 'bg-gray-900'
                                        } ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                        }`}></span>

                                    {/* Middle line */}
                                    <span className={`absolute w-6 h-0.5 transition-all duration-300 ${isDarkMode ? 'bg-white' : 'bg-gray-900'
                                        } ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                                        }`}></span>

                                    {/* Bottom line */}
                                    <span className={`absolute w-6 h-0.5 transition-all duration-300 ${isDarkMode ? 'bg-white' : 'bg-gray-900'
                                        } ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                                        }`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu with Advanced Animations */}
                <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="relative">
                        {/* Glassmorphism Background */}
                        <div className={`absolute inset-0 ${isDarkMode
                            ? 'bg-gradient-to-b from-black/50 to-black/60'
                            : 'bg-gradient-to-b from-white/50 to-white/60'
                            } backdrop-blur-2xl`}></div>

                        {/* Top Border Gradient */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

                        {/* Menu Items with Staggered Animation */}
                        <div className="relative z-10 px-4 py-6 space-y-2">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                                        } ${isActive(link.path)
                                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white shadow-lg'
                                            : isDarkMode
                                                ? 'text-gray-300 hover:text-white hover:bg-white/10'
                                                : 'text-gray-700 hover:text-gray-900 hover:bg-black/10'
                                        }`}
                                    style={{
                                        transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                                    }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-3">
                                            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive(link.path)
                                                ? 'bg-gradient-to-r from-cyan-400 to-purple-500 scale-100'
                                                : 'bg-gray-500 scale-0'
                                                }`}></span>
                                            {link.name}
                                        </span>
                                        {isActive(link.path) && (
                                            <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></span>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Backdrop Blur Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 animate-fadeIn"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Navbar;
