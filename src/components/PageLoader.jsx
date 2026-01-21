import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const PageLoader = ({ onLoadComplete }) => {
    const { isDarkMode } = useTheme();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        onLoadComplete();
                    }, 300);
                    return 100;
                }
                return prev + 10;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onLoadComplete]);

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${progress === 100 ? 'opacity-0' : 'opacity-100'
            } ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Main loader content */}
            <div className="relative z-10 flex flex-col items-center space-y-8">
                {/* Animated logo/brand */}
                <div className="relative">
                    {/* Rotating rings */}
                    <div className="absolute inset-0 -m-8">
                        <div className="w-32 h-32 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                    </div>
                    <div className="absolute inset-0 -m-6">
                        <div className="w-28 h-28 border-2 border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
                    </div>

                    {/* Center brand text */}
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        <h2 className="text-3xl font-bold gradient-text animate-pulse">
                            CM
                        </h2>
                    </div>
                </div>

                {/* Brand name with animation */}
                <div className="text-center space-y-2">
                    <h1 className={`text-2xl font-bold transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        <span className="inline-block animate-fade-in">Chathux</span>
                        {' '}
                        <span className="gradient-text inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>Md</span>
                    </h1>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
                        Loading your experience...
                    </p>
                </div>

                {/* Progress bar */}
                <div className="w-64 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full transition-all duration-300 relative"
                        style={{ width: `${progress}%` }}
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                </div>

                {/* Progress percentage */}
                <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {progress}%
                </div>
            </div>
        </div>
    );
};

export default PageLoader;
