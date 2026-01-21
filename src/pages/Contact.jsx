import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
    const { isDarkMode } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: 'Email',
            value: 'contact@chathuxmd.com',
            link: 'mailto:contact@chathuxmd.com',
            gradient: 'from-red-500 to-pink-500'
        },
        {
            icon: FaPhone,
            title: 'Phone',
            value: '+94 76 684 5749',
            link: 'tel:+94766845749',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Location',
            value: 'Homagama, Sri Lanka',
            link: 'https://maps.google.com/?q=Homagama,Sri+Lanka',
            gradient: 'from-blue-500 to-cyan-500'
        }
    ];


    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/chathuramd', label: 'GitHub', color: '#333333' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/chathura-dematapitiya-50a690275', label: 'LinkedIn', color: '#0077b5' },
        { icon: FaFacebook, url: 'https://www.facebook.com/chathura.madhusanka.7393/', label: 'Facebook', color: '#1877f2' },
        { icon: FaInstagram, url: 'https://www.instagram.com/chathuz_md__', label: 'Instagram', color: '#E4405F' },
        { icon: FaEnvelope, url: 'mailto:contact@chathuxmd.com', label: 'Email', color: '#ea4335' }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setSubmitStatus(null), 5000);
        }, 2000);
    };

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="section-title text-glow">Get In Touch</h1>
                    <p className={`section-subtitle mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Have a project in mind? Let's work together to bring your ideas to life
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Info Cards */}
                    {contactInfo.map((info, index) => (
                        <a
                            key={index}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card group animate-slide-up hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            <div className="relative z-10 text-center">
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.gradient} mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                                    <info.icon className="text-3xl text-white" />
                                </div>
                                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                    {info.title}
                                </h3>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} group-hover:text-primary-400 transition-colors duration-300`}>
                                    {info.value}
                                </p>
                            </div>

                            {/* Bottom Border Animation */}
                            <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${info.gradient} group-hover:w-full transition-all duration-500`}></div>
                        </a>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <div className="card relative overflow-hidden">
                            <h2 className="text-3xl font-bold mb-8 gradient-text">Send a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </span>
                                    {/* Shimmer Effect */}
                                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                                </button>

                                {/* Success Message */}
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center animate-fade-in">
                                        ✓ Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Additional Info & Social */}
                    <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <div className="card h-full relative overflow-hidden">
                            <h2 className="text-3xl font-bold mb-8 gradient-text">Let's Connect</h2>

                            <div className="space-y-6 mb-8">
                                <p className={`leading-relaxed text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                                </p>

                                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} border ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                                    <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        📍 Availability
                                    </h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Currently available for freelance projects and full-time opportunities.
                                    </p>
                                </div>

                                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} border ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                                    <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        ⚡ Response Time
                                    </h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        I typically respond within 24-48 hours during business days.
                                    </p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Follow Me
                                </h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
                                                }`}
                                            onMouseEnter={(e) => {
                                                const icon = e.currentTarget.querySelector('.social-icon');
                                                if (icon) icon.style.color = social.color;
                                            }}
                                            onMouseLeave={(e) => {
                                                const icon = e.currentTarget.querySelector('.social-icon');
                                                if (icon) icon.style.color = '';
                                            }}
                                        >
                                            <social.icon
                                                className={`social-icon text-2xl transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                                    }`}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
