import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowRight, FaCode, FaRocket, FaPalette } from 'react-icons/fa';
import profileImage1 from '../assets/Profile1.png';
import profileImage2 from '../assets/Profile2.jpeg';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
    const { isDarkMode } = useTheme();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const profileImages = [profileImage1, profileImage2];

    // Auto-switch images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [profileImages.length]);
    const features = [
        {
            icon: FaCode,
            title: 'Frontend Development',
            description: 'Building responsive, modern web applications with React, JavaScript, and cutting-edge technologies',
            gradient: 'from-cyan-400 to-blue-500',
        },
        {
            icon: FaPalette,
            title: 'UI/UX Design',
            description: 'Creating intuitive, visually compelling interfaces that deliver exceptional user experiences',
            gradient: 'from-purple-400 to-pink-500',
        },
        {
            icon: FaRocket,
            title: 'Digital Marketing',
            description: 'Driving online engagement and brand visibility through data-driven marketing strategies',
            gradient: 'from-orange-400 to-red-500',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Profile Image with ULTRA-ADVANCED Hover Animations */}
                        <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in">
                            <div className="relative group">
                                {/* HOVER ONLY: Multi-Layer Rotating Rainbow Rings */}
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                                    background: 'conic-gradient(from 0deg, #ff0080, #ff8c00, #40e0d0, #9d00ff, #ff0080)',
                                    animation: 'spin 4s linear infinite',
                                    padding: '6px',
                                    filter: 'blur(16px)',
                                    transform: 'scale(1.15)'
                                }}></div>

                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                                    background: 'conic-gradient(from 180deg, #00ff87, #60efff, #ff61d8, #ffeb3b, #00ff87)',
                                    animation: 'spin 6s linear infinite reverse',
                                    padding: '8px',
                                    filter: 'blur(20px)',
                                    transform: 'scale(1.2)',
                                    animationDelay: '0.5s'
                                }}></div>

                                {/* HOVER ONLY: Expanding Gradient Waves */}
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-2xl animate-pulse" style={{ transform: 'scale(1.3)' }}></div>
                                </div>

                                {/* HOVER ONLY: Color-Shifting Orbiting Particles */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animation: 'spin 8s linear infinite' }}>
                                    <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full shadow-2xl" style={{
                                        transform: 'translateX(-50%)',
                                        background: 'linear-gradient(135deg, #ff0080, #ff8c00)',
                                        boxShadow: '0 0 20px #ff0080'
                                    }}></div>
                                </div>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animation: 'spin 10s linear infinite reverse' }}>
                                    <div className="absolute top-1/2 right-0 w-5 h-5 rounded-full shadow-2xl" style={{
                                        transform: 'translateY(-50%)',
                                        background: 'linear-gradient(135deg, #40e0d0, #9d00ff)',
                                        boxShadow: '0 0 20px #40e0d0'
                                    }}></div>
                                </div>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animation: 'spin 7s linear infinite' }}>
                                    <div className="absolute bottom-0 left-1/2 w-4 h-4 rounded-full shadow-2xl" style={{
                                        transform: 'translateX(-50%)',
                                        background: 'linear-gradient(135deg, #ff61d8, #ffeb3b)',
                                        boxShadow: '0 0 20px #ff61d8'
                                    }}></div>
                                </div>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animation: 'spin 9s linear infinite reverse' }}>
                                    <div className="absolute top-1/2 left-0 w-5 h-5 rounded-full shadow-2xl" style={{
                                        transform: 'translateY(-50%)',
                                        background: 'linear-gradient(135deg, #00ff87, #60efff)',
                                        boxShadow: '0 0 20px #00ff87'
                                    }}></div>
                                </div>

                                {/* HOVER ONLY: Pulsing Rainbow Halos */}
                                <div className="absolute -inset-8 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700" style={{
                                    background: 'radial-gradient(circle, rgba(255,0,128,0.4) 0%, transparent 70%)',
                                    animation: 'pulse 2s ease-in-out infinite'
                                }}></div>
                                <div className="absolute -inset-12 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700" style={{
                                    background: 'radial-gradient(circle, rgba(64,224,208,0.3) 0%, transparent 70%)',
                                    animation: 'pulse 2.5s ease-in-out infinite',
                                    animationDelay: '0.3s'
                                }}></div>
                                <div className="absolute -inset-16 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700" style={{
                                    background: 'radial-gradient(circle, rgba(157,0,255,0.2) 0%, transparent 70%)',
                                    animation: 'pulse 3s ease-in-out infinite',
                                    animationDelay: '0.6s'
                                }}></div>

                                {/* Rotating Gradient Ring - Always visible */}
                                <div className="absolute inset-0 rounded-full" style={{
                                    background: 'conic-gradient(from 0deg, #22d3ee, #a855f7, #ec4899, #f59e0b, #22d3ee)',
                                    animation: 'spin 8s linear infinite',
                                    padding: '4px',
                                    filter: 'blur(12px)',
                                    opacity: 0.8
                                }}></div>

                                {/* Pulsing Outer Glow - Always visible */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>

                                {/* Orbiting Particles - Always visible - 4 Different Speeds */}
                                <div className="absolute inset-0" style={{ animation: 'spin 15s linear infinite' }}>
                                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/70" style={{ transform: 'translateX(-50%)' }}></div>
                                </div>
                                <div className="absolute inset-0" style={{ animation: 'spin 12s linear infinite reverse' }}>
                                    <div className="absolute top-1/2 right-0 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/70" style={{ transform: 'translateY(-50%)' }}></div>
                                </div>
                                <div className="absolute inset-0" style={{ animation: 'spin 10s linear infinite' }}>
                                    <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-pink-500 rounded-full shadow-lg shadow-pink-500/70" style={{ transform: 'translateX(-50%)' }}></div>
                                </div>
                                <div className="absolute inset-0" style={{ animation: 'spin 14s linear infinite reverse' }}>
                                    <div className="absolute top-1/2 left-0 w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/70" style={{ transform: 'translateY(-50%)' }}></div>
                                </div>

                                {/* Profile Image Container with Enhanced Gradient Border */}
                                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl float transition-all duration-500 group-hover:scale-105" style={{
                                    border: '5px solid transparent',
                                    backgroundImage: 'linear-gradient(#000000, #000000), linear-gradient(135deg, #22d3ee, #a855f7, #ec4899, #f59e0b)',
                                    backgroundOrigin: 'border-box',
                                    backgroundClip: 'padding-box, border-box'
                                }}>
                                    {/* Alternating Profile Images with Crossfade Animation */}
                                    {profileImages.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Chathux Md Profile ${index + 1}`}
                                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${currentImageIndex === index
                                                ? 'opacity-100 scale-100'
                                                : 'opacity-0 scale-95'
                                                }`}
                                            style={{
                                                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}
                                        />
                                    ))}

                                    {/* Inner Glow Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-cyan-900/20 pointer-events-none"></div>

                                    {/* Image Transition Indicator Dots */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                        {profileImages.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === index
                                                    ? 'bg-white w-6'
                                                    : 'bg-white/50 hover:bg-white/80'
                                                    }`}
                                                aria-label={`View profile image ${index + 1}`}
                                            ></button>
                                        ))}
                                    </div>
                                </div>

                                {/* Animated Corner Accents */}
                                <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-60" style={{ animation: 'pulse 3s ease-in-out infinite' }}></div>
                                <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full blur-2xl opacity-60" style={{ animation: 'pulse 3s ease-in-out infinite 1.5s' }}></div>
                                <div className="absolute top-1/4 -right-8 w-20 h-20 bg-gradient-to-bl from-pink-400 to-yellow-400 rounded-full blur-xl opacity-50" style={{ animation: 'pulse 4s ease-in-out infinite 0.5s' }}></div>
                                <div className="absolute bottom-1/4 -left-8 w-24 h-24 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full blur-xl opacity-50" style={{ animation: 'pulse 4s ease-in-out infinite 2s' }}></div>

                                {/* Sparkle Effects */}
                                <div className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50" style={{ animation: 'twinkle 2s ease-in-out infinite' }}></div>
                                <div className="absolute top-20 right-24 w-1.5 h-1.5 bg-white rounded-full shadow-lg shadow-white/50" style={{ animation: 'twinkle 2.5s ease-in-out infinite 0.5s' }}></div>
                                <div className="absolute bottom-16 left-16 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50" style={{ animation: 'twinkle 3s ease-in-out infinite 1s' }}></div>
                                <div className="absolute bottom-28 left-32 w-1 h-1 bg-white rounded-full shadow-lg shadow-white/50" style={{ animation: 'twinkle 2.2s ease-in-out infinite 1.5s' }}></div>
                                <div className="absolute top-1/3 left-20 w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-lg shadow-cyan-300/50" style={{ animation: 'twinkle 2.8s ease-in-out infinite 0.8s' }}></div>
                                <div className="absolute bottom-1/3 right-20 w-1 h-1 bg-purple-300 rounded-full shadow-lg shadow-purple-300/50" style={{ animation: 'twinkle 3.2s ease-in-out infinite 1.2s' }}></div>
                            </div>
                        </div>


                        {/* Text Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                                Hi, I'm <span className="gradient-text text-glow">Chathux Md</span>
                            </h1>
                            <p className={`text-xl md:text-2xl lg:text-3xl mb-4 font-light ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                                Frontend Developer | UI/UX Designer | Digital Marketer
                            </p>
                            <p className={`text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                MIS undergraduate at NSBM Green University specializing in creating user-centric digital experiences through frontend development, intuitive design, and data-driven marketing strategies.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                                <Link to="/projects" className="btn-primary group relative overflow-hidden">
                                    <span className="flex items-center gap-2 relative z-10">
                                        View My Work
                                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                                    </span>
                                    {/* Shimmer effect */}
                                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                                </Link>
                                <Link to="/contact" className="btn-secondary group relative overflow-hidden">
                                    <span className="relative z-10">Get In Touch</span>
                                    {/* Expanding border effect */}
                                    <span className="absolute inset-0 border-2 border-purple-400 rounded-full scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="section-title text-center">What I Bring</h2>
                    <p className={`section-subtitle text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Combining creativity with technical expertise
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="card text-center animate-slide-up group cursor-pointer relative overflow-hidden"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                <div className="flex justify-center mb-4 relative z-10">
                                    <div className={`p-4 bg-gradient-to-r ${feature.gradient} rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg`}>
                                        <feature.icon className="text-4xl text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 relative z-10 transition-colors duration-300 group-hover:text-primary-400">{feature.title}</h3>
                                <p className={`relative z-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature.description}</p>

                                {/* Bottom border animation */}
                                <span className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500`}></span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="card bg-gradient-to-r from-primary-500/20 to-accent-500/20 relative overflow-hidden group">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
                            Ready to Start Your Project?
                        </h2>
                        <p className={`text-xl mb-10 relative z-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Let's work together to bring your ideas to life
                        </p>
                        <Link to="/contact" className="btn-primary pulse-glow group relative inline-block">
                            <span className="relative z-10 flex items-center gap-2">
                                Contact Me Now
                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                            </span>
                            {/* Shimmer effect */}
                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Add Twinkle Animation to CSS */}
            <style>{`
                @keyframes twinkle {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.5);
                    }
                }
                
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;
