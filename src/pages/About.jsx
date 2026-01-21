import { FaGraduationCap, FaBriefcase, FaCode, FaServer, FaDatabase, FaPalette, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const About = () => {
    const { isDarkMode } = useTheme();

    const skills = [
        { name: 'React & Next.js', level: 90, icon: FaReact, color: 'text-cyan-400' },
        { name: 'JavaScript/TypeScript', level: 85, icon: SiTypescript, color: 'text-blue-500' },
        { name: 'Node.js & Express', level: 80, icon: FaNodeJs, color: 'text-green-500' },
        { name: 'Tailwind CSS', level: 95, icon: SiTailwindcss, color: 'text-cyan-300' },
        { name: 'MongoDB & SQL', level: 75, icon: SiMongodb, color: 'text-green-600' },
        { name: 'UI/UX Design', level: 85, icon: FaPalette, color: 'text-purple-400' },
    ];

    const experiences = [
        {
            icon: FaBriefcase,
            title: 'Trainee Developer & Business Analyst',
            company: 'Current Internship',
            period: 'Present',
            description: 'Contributing to system development, requirement analysis, and solution design. Applying analytical skills to deliver effective business solutions.',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: FaCode,
            title: 'Digital Marketing Coordinator',
            company: 'Current Role',
            period: 'Present',
            description: 'Managing digital campaigns and applying data-driven strategies to enhance online engagement and brand visibility. Combining marketing expertise with technical skills.',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: FaBriefcase,
            title: 'QA Intern',
            company: 'Previous Experience',
            period: 'Past',
            description: 'Gained hands-on experience in software testing, defect identification, and quality improvement processes. Developed strong attention to detail and analytical skills.',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            icon: FaGraduationCap,
            title: 'BSc (Special) in Management Information Systems',
            company: 'NSBM Green University',
            period: 'Undergraduate',
            description: 'Pursuing specialized degree in MIS with focus on frontend web development, UI/UX design, digital marketing, quality assurance, and software testing.',
            gradient: 'from-orange-500 to-red-500'
        },
    ];

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="section-title text-glow">About Me</h1>
                    <p className={`section-subtitle mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Passionate developer crafting digital experiences with code and creativity
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Bio Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <div className="animate-slide-up h-full">
                        <div className="card h-full relative group overflow-hidden border-2 border-transparent hover:border-purple-500/30 transition-all duration-500">
                            {/* Gradient Background on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <h2 className="text-3xl font-bold mb-8 gradient-text inline-block">Who I Am</h2>

                            <div className="space-y-6 relative z-10">
                                <p className={`leading-relaxed text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'}`}>
                                    I'm Chathura Madhusankha, an undergraduate pursuing a BSc (Special) in Management Information Systems at NSBM Green University. I specialize in frontend web development, UI/UX design, and digital marketing, with an academic and practical background in quality assurance and software testing.
                                </p>
                                <p className={`leading-relaxed text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'}`}>
                                    Previously, I worked as a QA Intern, where I gained hands-on experience in software testing, defect identification, and quality improvement processes. Currently, I am completing an internship as a Trainee Developer and Business Analyst, contributing to system development, requirement analysis, and solution design. In addition, I work as a Digital Marketing Coordinator, managing digital campaigns and applying data-driven strategies to enhance online engagement and brand visibility.
                                </p>
                                <p className={`leading-relaxed text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'}`}>
                                    My approach combines creative problem-solving with analytical thinking, enabling me to design and develop user-centric digital experiences that are both functional and visually compelling. I am committed to continuous learning and professional growth by taking on new challenges and delivering user-friendly, impactful digital solutions.
                                </p>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-purple-500/50 rounded-tr-xl opacity-50 group-hover:opacity-100 group-hover:w-16 group-hover:h-16 transition-all duration-500"></div>
                            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-xl opacity-50 group-hover:opacity-100 group-hover:w-16 group-hover:h-16 transition-all duration-500"></div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="animate-slide-up h-full" style={{ animationDelay: '0.2s' }}>
                        <div className="card h-full relative group overflow-hidden">
                            <h2 className="text-3xl font-bold mb-8 gradient-text inline-block">Technical Skills</h2>
                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <div key={index} className="group/skill">
                                        <div className="flex justify-between mb-2 items-center">
                                            <div className="flex items-center gap-3">
                                                <skill.icon className={`text-xl ${skill.color} group-hover/skill:scale-125 transition-transform duration-300`} />
                                                <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{skill.name}</span>
                                            </div>
                                            <span className="text-primary-400 font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700/30 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-white/5">
                                            <div
                                                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000 relative group-hover/skill:brightness-125"
                                                style={{ width: `${skill.level}%` }}
                                            >
                                                <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-16 gradient-text">My Journey</h2>
                    <div className="space-y-8 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden md:block"></div>

                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} animate-slide-up group`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Icon Bubble */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 border-4 border-purple-500 z-10 items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>

                                <div className="w-full md:w-[calc(50%-2rem)]">
                                    <div className={`card p-6 md:p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-l-4 ${index % 2 === 0 ? 'md:text-right border-l-cyan-500' : 'md:text-left border-l-pink-500'}`}>
                                        {/* Hover Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                                            <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                <exp.icon className="text-2xl text-white" />
                                            </div>
                                            <div>
                                                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                                                <p className="text-primary-400 font-medium">{exp.company}</p>
                                            </div>
                                        </div>

                                        <p className={`text-sm mb-4 inline-block px-3 py-1 rounded-full ${isDarkMode ? 'bg-white/10 text-gray-300' : 'bg-black/5 text-gray-600'}`}>
                                            {exp.period}
                                        </p>
                                        <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for flex layout */}
                                <div className="hidden md:block w-full md:w-[calc(50%-2rem)]"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
                    <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Looking for a developer to join your team?
                    </p>
                    <a href="/contact" className="btn-primary inline-flex items-center gap-2 group">
                        <span className="relative z-10">Lets Talk</span>
                        <FaBriefcase className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                        {/* Shimmer effect */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
