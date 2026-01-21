import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Wrapper component to handle route changes
function AppContent() {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    // Show loader on route change
    useEffect(() => {
        setIsLoading(true);
    }, [location.pathname]);

    const handleLoadComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <PageLoader onLoadComplete={handleLoadComplete} />}
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow pt-16">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    );
}

function App() {
    return (
        <ThemeProvider>
            <Router>
                <AppContent />
            </Router>
        </ThemeProvider>
    );
}

export default App;
