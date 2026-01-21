import { useTheme } from '../context/ThemeContext';

const AnimatedBackground = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base Gradient Background with Animated Shift */}
            <div
                className={`absolute inset-0 transition-colors duration-1000 ${isDarkMode
                        ? 'bg-gradient-to-br from-black via-gray-900 to-black'
                        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
                    }`}
            ></div>

            {/* Animated Gradient Orbs - Enhanced Layer 1 */}
            <div className="absolute inset-0">
                {/* Purple Orb - Top Left with Pulse */}
                <div
                    className={`absolute w-[700px] h-[700px] rounded-full blur-3xl ${isDarkMode ? 'opacity-30' : 'opacity-20'
                        }`}
                    style={{
                        top: '-15%',
                        left: '-15%',
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%)',
                        animation: 'float 20s ease-in-out infinite, pulse 8s ease-in-out infinite'
                    }}
                ></div>

                {/* Cyan Orb - Top Right with Rotation */}
                <div
                    className={`absolute w-[600px] h-[600px] rounded-full blur-3xl ${isDarkMode ? 'opacity-28' : 'opacity-18'
                        }`}
                    style={{
                        top: '5%',
                        right: '-10%',
                        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.45) 0%, rgba(6, 182, 212, 0.3) 40%, transparent 70%)',
                        animation: 'float 25s ease-in-out infinite reverse, rotate 60s linear infinite',
                        animationDelay: '2s'
                    }}
                ></div>

                {/* Pink Orb - Bottom Left with Scale */}
                <div
                    className={`absolute w-[650px] h-[650px] rounded-full blur-3xl ${isDarkMode ? 'opacity-32' : 'opacity-22'
                        }`}
                    style={{
                        bottom: '-15%',
                        left: '0%',
                        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.48) 0%, rgba(219, 39, 119, 0.3) 40%, transparent 70%)',
                        animation: 'float 22s ease-in-out infinite, breathe 10s ease-in-out infinite',
                        animationDelay: '4s'
                    }}
                ></div>

                {/* Orange Orb - Bottom Right */}
                <div
                    className={`absolute w-[580px] h-[580px] rounded-full blur-3xl ${isDarkMode ? 'opacity-30' : 'opacity-20'
                        }`}
                    style={{
                        bottom: '10%',
                        right: '5%',
                        background: 'radial-gradient(circle, rgba(251, 146, 60, 0.42) 0%, rgba(249, 115, 22, 0.3) 40%, transparent 70%)',
                        animation: 'float 28s ease-in-out infinite reverse, pulse 12s ease-in-out infinite',
                        animationDelay: '6s'
                    }}
                ></div>

                {/* Blue Orb - Center with Morph */}
                <div
                    className={`absolute w-[620px] h-[620px] rounded-full blur-3xl ${isDarkMode ? 'opacity-26' : 'opacity-16'
                        }`}
                    style={{
                        top: '45%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.3) 40%, transparent 70%)',
                        animation: 'float 30s ease-in-out infinite, morph 15s ease-in-out infinite',
                        animationDelay: '8s'
                    }}
                ></div>

                {/* Additional Accent Orbs */}
                <div
                    className={`absolute w-[400px] h-[400px] rounded-full blur-3xl ${isDarkMode ? 'opacity-20' : 'opacity-12'
                        }`}
                    style={{
                        top: '20%',
                        left: '30%',
                        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)',
                        animation: 'float 35s ease-in-out infinite reverse',
                        animationDelay: '10s'
                    }}
                ></div>

                <div
                    className={`absolute w-[450px] h-[450px] rounded-full blur-3xl ${isDarkMode ? 'opacity-22' : 'opacity-14'
                        }`}
                    style={{
                        bottom: '30%',
                        right: '25%',
                        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.38) 0%, transparent 70%)',
                        animation: 'float 32s ease-in-out infinite',
                        animationDelay: '12s'
                    }}
                ></div>
            </div>

            {/* Animated Gradient Mesh - Enhanced Layer 2 */}
            <div className="absolute inset-0">
                <div
                    className={`absolute inset-0 ${isDarkMode ? 'opacity-12' : 'opacity-6'}`}
                    style={{
                        backgroundImage: `
                            radial-gradient(at 20% 30%, rgba(139, 92, 246, 0.35) 0px, transparent 50%),
                            radial-gradient(at 80% 20%, rgba(34, 211, 238, 0.3) 0px, transparent 50%),
                            radial-gradient(at 40% 70%, rgba(236, 72, 153, 0.33) 0px, transparent 50%),
                            radial-gradient(at 90% 80%, rgba(251, 146, 60, 0.28) 0px, transparent 50%),
                            radial-gradient(at 10% 90%, rgba(59, 130, 246, 0.32) 0px, transparent 50%),
                            radial-gradient(at 60% 40%, rgba(168, 85, 247, 0.25) 0px, transparent 50%)
                        `,
                        animation: 'meshMove 40s ease-in-out infinite'
                    }}
                ></div>
            </div>

            {/* Enhanced Floating Particles with Glow */}
            <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full ${isDarkMode ? 'bg-white/30' : 'bg-black/15'
                            }`}
                        style={{
                            width: `${2 + Math.random() * 4}px`,
                            height: `${2 + Math.random() * 4}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            boxShadow: isDarkMode
                                ? '0 0 10px rgba(255, 255, 255, 0.5)'
                                : '0 0 8px rgba(0, 0, 0, 0.3)',
                            animation: `particle ${15 + Math.random() * 25}s linear infinite, twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 10}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Animated Grid Pattern with Perspective */}
            <div
                className={`absolute inset-0 ${isDarkMode ? 'opacity-6' : 'opacity-4'}`}
                style={{
                    backgroundImage: `
                        linear-gradient(${isDarkMode ? 'rgba(139, 92, 246, 0.08)' : 'rgba(139, 92, 246, 0.05)'} 1px, transparent 1px),
                        linear-gradient(90deg, ${isDarkMode ? 'rgba(34, 211, 238, 0.08)' : 'rgba(34, 211, 238, 0.05)'} 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    animation: 'gridMove 60s linear infinite',
                    transform: 'perspective(1000px) rotateX(60deg)',
                    transformOrigin: 'center center'
                }}
            ></div>

            {/* Radial Gradient Overlay for Depth */}
            <div
                className="absolute inset-0"
                style={{
                    background: isDarkMode
                        ? 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%)'
                        : 'radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.7) 100%)'
                }}
            ></div>

            {/* Enhanced Animated Light Rays with Glow */}
            <div className={`absolute inset-0 ${isDarkMode ? 'opacity-12' : 'opacity-6'}`}>
                <div
                    className="absolute top-0 left-1/4 w-2 h-full"
                    style={{
                        background: `linear-gradient(to bottom, transparent, ${isDarkMode ? 'rgba(139, 92, 246, 0.4)' : 'rgba(139, 92, 246, 0.25)'
                            }, transparent)`,
                        filter: 'blur(8px)',
                        animation: 'lightRay 8s ease-in-out infinite',
                        animationDelay: '0s'
                    }}
                ></div>
                <div
                    className="absolute top-0 left-1/2 w-2 h-full"
                    style={{
                        background: `linear-gradient(to bottom, transparent, ${isDarkMode ? 'rgba(34, 211, 238, 0.4)' : 'rgba(34, 211, 238, 0.25)'
                            }, transparent)`,
                        filter: 'blur(8px)',
                        animation: 'lightRay 10s ease-in-out infinite',
                        animationDelay: '2s'
                    }}
                ></div>
                <div
                    className="absolute top-0 left-3/4 w-2 h-full"
                    style={{
                        background: `linear-gradient(to bottom, transparent, ${isDarkMode ? 'rgba(236, 72, 153, 0.4)' : 'rgba(236, 72, 153, 0.25)'
                            }, transparent)`,
                        filter: 'blur(8px)',
                        animation: 'lightRay 12s ease-in-out infinite',
                        animationDelay: '4s'
                    }}
                ></div>
            </div>

            {/* Animated Waves Effect */}
            <div className={`absolute inset-0 ${isDarkMode ? 'opacity-8' : 'opacity-4'}`}>
                <div
                    className="absolute bottom-0 left-0 right-0 h-64"
                    style={{
                        background: `linear-gradient(to top, ${isDarkMode ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.1)'
                            }, transparent)`,
                        animation: 'wave 20s ease-in-out infinite',
                        transformOrigin: 'bottom'
                    }}
                ></div>
                <div
                    className="absolute bottom-0 left-0 right-0 h-48"
                    style={{
                        background: `linear-gradient(to top, ${isDarkMode ? 'rgba(34, 211, 238, 0.15)' : 'rgba(34, 211, 238, 0.08)'
                            }, transparent)`,
                        animation: 'wave 25s ease-in-out infinite reverse',
                        animationDelay: '3s',
                        transformOrigin: 'bottom'
                    }}
                ></div>
            </div>

            {/* Noise Texture Overlay */}
            <div
                className={`absolute inset-0 ${isDarkMode ? 'opacity-[0.03]' : 'opacity-[0.02]'}`}
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'overlay'
                }}
            ></div>

            {/* Spotlight Effect */}
            <div
                className={`absolute inset-0 ${isDarkMode ? 'opacity-10' : 'opacity-5'}`}
                style={{
                    background: `radial-gradient(circle 800px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${isDarkMode ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.1)'
                        }, transparent)`,
                    animation: 'spotlight 30s ease-in-out infinite'
                }}
            ></div>
        </div>
    );
};

export default AnimatedBackground;
