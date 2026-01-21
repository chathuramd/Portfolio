import { useState } from 'react';
import { FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

// Import all images
import Advertisement1 from '../assets/Advertisement/Advertisement1.png';
import Advertisement2 from '../assets/Advertisement/Advertisement2.png';
import Advertisement3 from '../assets/Advertisement/Advertisement3.png';
import Advertisement4 from '../assets/Advertisement/Advertisement4.jpg';
import Advertisement5 from '../assets/Advertisement/Advertisement5.png';
import Advertisement6 from '../assets/Advertisement/Advertisement6.jpg';
import Advertisement7 from '../assets/Advertisement/Advertisement7.png';
import Advertisement8 from '../assets/Advertisement/Advertisement8.jpg';
import Advertisement9 from '../assets/Advertisement/Advertisement9.png';
import Advertisement10 from '../assets/Advertisement/Advertisement10.png';
import Advertisement11 from '../assets/Advertisement/Advertisement11.jpg';
import Advertisement12 from '../assets/Advertisement/Advertisement12.jpg';
import Advertisement13 from '../assets/Advertisement/Advertisement13.jpg';
import Advertisement14 from '../assets/Advertisement/Advertisement14.png';
import Advertisement15 from '../assets/Advertisement/Advertisement15.png';
import Advertisement16 from '../assets/Advertisement/Advertisement16.png';
import Advertisement17 from '../assets/Advertisement/Hasandi (2).png';
import Advertisement18 from '../assets/Advertisement/New.png';
import Advertisement19 from '../assets/Advertisement/bedsheets 2.jpg';
import Advertisement20 from '../assets/Advertisement/class post.png';

import SpecialDay1 from '../assets/Special day post/SpecialDay1.png';
import SpecialDay2 from '../assets/Special day post/SpecialDay2.jpg';
import SpecialDay3 from '../assets/Special day post/SpecialDay3.jpg';

import UI1 from '../assets/UIUX/UI1.jpg';
import Logo1 from '../assets/logo/Logo1.png';

import Tshirt1 from '../assets/tshirt/Tshirt1.jpg';
import Tshirt2 from '../assets/tshirt/Tshirt2.jpg';
import Tshirt3 from '../assets/tshirt/Tshirt3.JPG';

const Projects = () => {
    const { isDarkMode } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Project structure with categories and subcategories
    const projectData = {
        'Marketing': {
            icon: '📢',
            gradient: 'from-orange-500 to-red-500',
            subcategories: {
                'Advertisements': {
                    description: 'Professional advertisement designs for digital marketing campaigns',
                    images: [
                        { src: Advertisement1, title: 'Advertisement 1' },
                        { src: Advertisement2, title: 'Advertisement 2' },
                        { src: Advertisement3, title: 'Advertisement 3' },
                        { src: Advertisement4, title: 'Advertisement 4' },
                        { src: Advertisement5, title: 'Advertisement 5' },
                        { src: Advertisement6, title: 'Advertisement 6' },
                        { src: Advertisement7, title: 'Advertisement 7' },
                        { src: Advertisement8, title: 'Advertisement 8' },
                        { src: Advertisement9, title: 'Advertisement 9' },
                        { src: Advertisement10, title: 'Advertisement 10' },
                        { src: Advertisement11, title: 'Advertisement 11' },
                        { src: Advertisement12, title: 'Advertisement 12' },
                        { src: Advertisement13, title: 'Advertisement 13' },
                        { src: Advertisement14, title: 'Advertisement 14' },
                        { src: Advertisement15, title: 'Advertisement 15' },
                        { src: Advertisement16, title: 'Advertisement 16' },
                        { src: Advertisement17, title: 'Hasandi Advertisement' },
                        { src: Advertisement18, title: 'New Advertisement' },
                        { src: Advertisement19, title: 'Bedsheets Advertisement' },
                        { src: Advertisement20, title: 'Class Post Advertisement' },
                    ]
                },
                'Special Day Posts': {
                    description: 'Social media graphics for special occasions and celebrations',
                    images: [
                        { src: SpecialDay1, title: 'Special Day Post 1' },
                        { src: SpecialDay2, title: 'Special Day Post 2' },
                        { src: SpecialDay3, title: 'Special Day Post 3' },
                    ]
                },
                'T-Shirt Designs': {
                    description: 'Creative apparel and merchandise design work',
                    images: [
                        { src: Tshirt1, title: 'T-Shirt Design 1' },
                        { src: Tshirt2, title: 'T-Shirt Design 2' },
                        { src: Tshirt3, title: 'T-Shirt Design 3' },
                    ]
                },
                'Logo Design': {
                    description: 'Brand identity and logo design projects',
                    images: [
                        { src: Logo1, title: 'Logo Design 1' },
                    ]
                }
            }
        },
        'UI/UX Design': {
            icon: '🎨',
            gradient: 'from-purple-500 to-pink-500',
            subcategories: {
                'Interface Design': {
                    description: 'User interface and user experience design projects',
                    images: [
                        { src: UI1, title: 'UI Design 1' },
                    ]
                }
            }
        },
        'Frontend Development': {
            icon: '💻',
            gradient: 'from-blue-500 to-cyan-500',
            subcategories: {
                'Web Applications': {
                    description: 'Modern web applications built with React and cutting-edge technologies',
                    images: [] // Placeholder for future projects
                }
            }
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedSubcategory(null);
    };

    const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategory(subcategory);
    };

    const handleBackToCategories = () => {
        setSelectedCategory(null);
        setSelectedSubcategory(null);
    };

    const handleBackToSubcategories = () => {
        setSelectedSubcategory(null);
    };

    const openLightbox = (image, index) => {
        setLightboxImage(image);
        setCurrentImageIndex(index);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    const navigateImage = (direction) => {
        const images = projectData[selectedCategory].subcategories[selectedSubcategory].images;
        let newIndex = currentImageIndex + direction;

        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;

        setCurrentImageIndex(newIndex);
        setLightboxImage(images[newIndex]);
    };

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="section-title text-glow">My Projects</h1>
                    <p className={`section-subtitle mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {!selectedCategory && 'Explore my work across different categories'}
                        {selectedCategory && !selectedSubcategory && `${selectedCategory} - Choose a subcategory`}
                        {selectedCategory && selectedSubcategory && `${selectedCategory} / ${selectedSubcategory}`}
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Back Navigation */}
                {(selectedCategory || selectedSubcategory) && (
                    <button
                        onClick={selectedSubcategory ? handleBackToSubcategories : handleBackToCategories}
                        className={`mb-8 flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${isDarkMode
                            ? 'bg-white/10 hover:bg-white/20 text-white'
                            : 'bg-black/10 hover:bg-black/20 text-gray-900'
                            }`}
                    >
                        <FaArrowLeft />
                        <span>Back to {selectedSubcategory ? 'Subcategories' : 'Categories'}</span>
                    </button>
                )}

                {/* Main Categories View */}
                {!selectedCategory && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(projectData).map(([category, data], index) => (
                            <div
                                key={category}
                                onClick={() => handleCategoryClick(category)}
                                className="card group cursor-pointer animate-slide-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-center space-y-4">
                                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {data.icon}
                                    </div>
                                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {category}
                                    </h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {Object.keys(data.subcategories).length} {Object.keys(data.subcategories).length === 1 ? 'subcategory' : 'subcategories'}
                                    </p>
                                    <div className={`h-1 w-20 mx-auto rounded-full bg-gradient-to-r ${data.gradient}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Subcategories View */}
                {selectedCategory && !selectedSubcategory && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(projectData[selectedCategory].subcategories).map(([subcategory, data], index) => (
                            <div
                                key={subcategory}
                                onClick={() => handleSubcategoryClick(subcategory)}
                                className="card group cursor-pointer animate-slide-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {subcategory}
                                </h3>
                                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {data.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className={`text-sm font-medium ${isDarkMode ? 'text-cyan-400' : 'text-purple-600'}`}>
                                        {data.images.length} {data.images.length === 1 ? 'project' : 'projects'}
                                    </span>
                                    <span className="text-2xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Images Gallery View */}
                {selectedCategory && selectedSubcategory && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {projectData[selectedCategory].subcategories[selectedSubcategory].images.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => openLightbox(image, index)}
                                className="card group cursor-pointer overflow-hidden p-0 animate-slide-up"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${isDarkMode ? 'bg-black/70' : 'bg-white/70'
                                        }`}>
                                        <span className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            View Full Size
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {image.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {selectedCategory && selectedSubcategory &&
                    projectData[selectedCategory].subcategories[selectedSubcategory].images.length === 0 && (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">📁</div>
                            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                No Projects Yet
                            </h3>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Projects will be added soon!
                            </p>
                        </div>
                    )}
            </div>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 animate-fade-in"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
                    >
                        <FaTimes size={24} />
                    </button>

                    {/* Navigation Buttons */}
                    {projectData[selectedCategory].subcategories[selectedSubcategory].images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
                                className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaChevronLeft size={24} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
                                className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaChevronRight size={24} />
                            </button>
                        </>
                    )}

                    {/* Image */}
                    <div className="max-w-7xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={lightboxImage.src}
                            alt={lightboxImage.title}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                        <div className="text-center mt-4">
                            <h3 className="text-white text-xl font-semibold">{lightboxImage.title}</h3>
                            <p className="text-gray-400 text-sm mt-1">
                                {currentImageIndex + 1} / {projectData[selectedCategory].subcategories[selectedSubcategory].images.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
