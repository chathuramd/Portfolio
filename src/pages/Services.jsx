import { FaCode, FaPalette, FaRocket, FaCheckCircle, FaChartLine, FaBullhorn, FaArrowRight, FaCheck } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Services = () => {
    const { isDarkMode } = useTheme();
    const services = [
        {
            icon: FaCode,
            title: 'Frontend Web Development',
            description: 'Building responsive, modern web applications using React, JavaScript, and cutting-edge frontend technologies.',
            features: ['React & Next.js', 'Responsive Design', 'Modern JavaScript', 'Performance Optimization'],
            gradient: 'from-blue-500 to-cyan-500',
            delay: 0
        },
        {
            icon: FaPalette,
            title: 'UI/UX Design',
            description: 'Creating intuitive, visually compelling interfaces that deliver exceptional user experiences and drive engagement.',
            features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
            gradient: 'from-purple-500 to-pink-500',
            delay: 100
        },
        {
            icon: FaBullhorn,
            title: 'Digital Marketing',
            description: 'Driving online engagement and brand visibility through data-driven marketing strategies and campaigns.',
            features: ['Social Media Marketing', 'Content Strategy', 'Campaign Management', 'Analytics & Insights'],
            gradient: 'from-orange-500 to-red-500',
            delay: 200
        },
        {
            icon: FaCheckCircle,
            title: 'Quality Assurance & Testing',
            description: 'Ensuring software quality through comprehensive testing, defect identification, and quality improvement processes.',
            features: ['Manual Testing', 'Test Case Design', 'Bug Tracking', 'Quality Metrics'],
            gradient: 'from-green-500 to-emerald-500',
            delay: 300
        },
        {
            icon: FaChartLine,
            title: 'Business Analysis',
            description: 'Analyzing business requirements, designing solutions, and bridging the gap between stakeholders and development teams.',
            features: ['Requirement Analysis', 'Solution Design', 'Process Improvement', 'Stakeholder Management'],
            gradient: 'from-indigo-500 to-violet-500',
            delay: 400
        },
        {
            icon: FaRocket,
            title: 'Web Application Development',
            description: 'End-to-end development of scalable web applications with focus on user experience and performance.',
            features: ['Full-Stack Solutions', 'API Integration', 'Database Design', 'Deployment & Maintenance'],
            gradient: 'from-rose-500 to-pink-600',
            delay: 500
        },
    ];

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="section-title text-glow">My Services</h1>
                    <p className={`section-subtitle mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Comprehensive digital solutions tailored to your unique needs
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card group animate-slide-up relative overflow-hidden h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-white/10"
                            style={{ animationDelay: `${service.delay}ms` }}
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Top Accent Line */}
                            <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-700 ease-out`}></div>

                            <div className="relative z-10 p-6 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 flex items-center justify-center`}>
                                        <service.icon className="text-3xl text-white" />
                                    </div>
                                    <span className={`text-5xl font-bold opacity-5 font-sans group-hover:opacity-10 transition-opacity duration-500 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className={`text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${service.gradient} transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {service.title}
                                </h3>

                                <p className={`mb-8 leading-relaxed flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {service.description}
                                </p>

                                <div className="space-y-3 pt-6 border-t border-gray-200/10 dark:border-gray-700/30">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center group/item">
                                            <span className={`p-1 rounded-full bg-gradient-to-br ${service.gradient} mr-3 shadow-sm group-hover/item:scale-125 transition-transform duration-300`}>
                                                <FaCheck className="text-[10px] text-white" />
                                            </span>
                                            <span className={`text-sm ${isDarkMode ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-800'} transition-colors duration-300`}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-24 text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
                    <div className="card bg-gradient-to-r from-primary-500/10 to-accent-500/10 max-w-4xl mx-auto relative overflow-hidden group p-10 md:p-14 border border-white/10">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 gradient-text">
                            Need a Custom Solution?
                        </h2>
                        <p className={`text-xl mb-10 max-w-2xl mx-auto relative z-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Every project is unique. Let's discuss how I can help bring your vision to life with a tailored strategy.
                        </p>

                        <Link to="/contact" className="btn-primary group relative inline-flex items-center gap-3 px-8 py-4 text-lg">
                            <span className="relative z-10 font-semibold">Get a Free Consultation</span>
                            <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

                            {/* Shimmer Effect */}
                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
