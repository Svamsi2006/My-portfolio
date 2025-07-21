// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const typewriter = document.getElementById('typewriter');

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 1500);
});

// Typewriter Effect
const typewriterTexts = [
    "Data Analyst & Business Intelligence Expert",
    "Full Stack Developer & Problem Solver",
    "Python & JavaScript Enthusiast",
    "Power BI & Tableau Specialist",
    "AI & Machine Learning Explorer",
    "Business Analytics & KPI Designer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterSpeed = 100;

function typewriterEffect() {
    const currentText = typewriterTexts[textIndex];
    
    if (isDeleting) {
        typewriter.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typewriterSpeed = 50;
    } else {
        typewriter.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typewriterSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        typewriterSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterTexts.length;
        typewriterSpeed = 500;
    }
    
    setTimeout(typewriterEffect, typewriterSpeed);
}

// Start typewriter effect
typewriterEffect();

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('show');
    } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('show');
    }
});

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'visible';
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = 'visible';
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Theme Toggle
let isDarkTheme = true;

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    
    const icon = themeToggle.querySelector('i');
    icon.className = isDarkTheme ? 'fas fa-moon' : 'fas fa-sun';
    
    // Add rotation effect
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// Back to Top Button
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Skills Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const languageBars = document.querySelectorAll('.language-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = width;
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
    languageBars.forEach(bar => observer.observe(bar));
}

// Animate soft skills on hover
function animateSoftSkills() {
    const softSkillItems = document.querySelectorAll('.soft-skill-item');
    
    softSkillItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('i');
            icon.style.animation = 'pulse 0.6s ease-in-out';
        });
        
        item.addEventListener('animationend', () => {
            const icon = item.querySelector('i');
            icon.style.animation = '';
        });
        
        // Staggered animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.5 });
        
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        
        observer.observe(item);
    });
}

// Animate language items
function animateLanguages() {
    const languageItems = document.querySelectorAll('.language-item');
    
    languageItems.forEach((item, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                        
                        // Animate the progress bar
                        const progressBar = item.querySelector('.language-progress');
                        const width = progressBar.getAttribute('data-width');
                        setTimeout(() => {
                            progressBar.style.width = width;
                        }, 300);
                    }, index * 200);
                }
            });
        }, { threshold: 0.5 });
        
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.8s ease';
        
        observer.observe(item);
    });
}

// Tech icons enhanced animation
function enhanceTechIcons() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach((icon, index) => {
        // Floating animation
        setInterval(() => {
            const randomY = (Math.random() - 0.5) * 10;
            icon.style.transform = `translateY(${randomY}px)`;
        }, 3000 + index * 200);
        
        // Enhanced hover effect
        icon.addEventListener('mouseenter', () => {
            icon.style.animation = 'techIconPulse 0.6s ease-in-out';
        });
        
        icon.addEventListener('animationend', () => {
            icon.style.animation = '';
        });
    });
}

// Add new animations to CSS dynamically
const enhancedStyle = document.createElement('style');
enhancedStyle.textContent = `
    @keyframes techIconPulse {
        0% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.15) rotate(5deg); }
        100% { transform: scale(1) rotate(0deg); }
    }
    
    @keyframes skillCategorySlide {
        0% { 
            opacity: 0; 
            transform: translateY(50px);
        }
        100% { 
            opacity: 1; 
            transform: translateY(0);
        }
    }
    
    .skill-category {
        animation: skillCategorySlide 0.8s ease-out;
    }
    
    .skill-category:nth-child(2) {
        animation-delay: 0.2s;
    }
    
    .skill-category:nth-child(3) {
        animation-delay: 0.4s;
    }
    
    .tool-tag {
        transition: all 0.3s ease;
    }
    
    .tool-tag:hover {
        background: var(--gradient);
        color: white;
        transform: scale(1.05);
    }
`;
document.head.appendChild(enhancedStyle);

// Initialize skill bars animation
animateSkillBars();

// Initialize new skill animations
animateSoftSkills();
animateLanguages();
enhanceTechIcons();

// Contact Form Handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link
    const mailtoLink = `mailto:seelamvamsisivaganesh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    contactForm.reset();
});

// Show Success Message
function showSuccessMessage() {
    successMessage.classList.add('show');
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    
    if (hero && heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Floating Animation for Hero Icons
function initFloatingIcons() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach((icon, index) => {
        // Add random movement
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 500);
    });
}

// Initialize floating icons
initFloatingIcons();

// Intersection Observer for Animation Triggers
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-item, .project-card, .certificate-card').forEach(el => {
    observer.observe(el);
});

// Project Card Hover Effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Certificate Card Flip Effect
document.querySelectorAll('.certificate-card').forEach(card => {
    let isFlipped = false;
    
    card.addEventListener('click', () => {
        isFlipped = !isFlipped;
        const front = card.querySelector('.certificate-front');
        const back = card.querySelector('.certificate-back');
        
        if (isFlipped) {
            front.style.transform = 'rotateY(180deg)';
            back.style.transform = 'rotateY(0deg)';
        } else {
            front.style.transform = 'rotateY(0deg)';
            back.style.transform = 'rotateY(180deg)';
        }
    });
});

// Social Links Hover Effect
document.querySelectorAll('.social-link, .social-btn').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.animation = 'pulse 0.6s ease-in-out';
    });
    
    link.addEventListener('animationend', () => {
        link.style.animation = '';
    });
});

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Navbar Active Link Highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add active nav link styles
const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-link.active {
        color: var(--text-primary) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(navStyle);

// Form Input Animation
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
    
    // Check if input has value on page load
    if (input.value) {
        input.parentElement.classList.add('focused');
    }
});

// Cursor Trail Effect (Optional Enhancement)
function createCursorTrail() {
    const trail = [];
    const trailLength = 20;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--gradient);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: ${1 - i / trailLength};
            transition: opacity 0.1s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateTrail() {
        let x = mouseX;
        let y = mouseY;
        
        trail.forEach((dot, index) => {
            const nextDot = trail[index + 1] || trail[0];
            dot.style.left = x + 'px';
            dot.style.top = y + 'px';
            
            if (nextDot) {
                x += (parseFloat(nextDot.style.left) - x) * 0.3;
                y += (parseFloat(nextDot.style.top) - y) * 0.3;
            }
        });
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}

// Initialize cursor trail on desktop only
if (window.innerWidth > 768) {
    createCursorTrail();
}

// Scroll Progress Indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--gradient);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Download Resume Function
function downloadResume() {
    // Open Google Drive folder in new tab
    window.open('https://drive.google.com/drive/folders/1djNDuc4KvK4gYK4_vsnCnGWwcACEXUlq', '_blank');
}

// Add click event to resume button
document.querySelector('.download-btn').addEventListener('click', (e) => {
    e.preventDefault();
    downloadResume();
});

// Lazy Loading for Images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Error Handling for Images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
        img.style.display = 'none';
        console.warn(`Failed to load image: ${img.src}`);
    });
});

// Performance Optimization: Debounce Scroll Events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Console Welcome Message
console.log(`
%c🚀 Welcome to Vamsi's Portfolio!
%c
Built with ❤️ using:
• HTML5 & CSS3
• Vanilla JavaScript
• AOS Animation Library
• Modern Web APIs

Feel free to explore the code!
GitHub: https://github.com/Svamsi2006
`, 
'color: #2979ff; font-size: 16px; font-weight: bold;',
'color: #00e676; font-size: 12px;'
);

// Service Worker Registration (for PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics Event Tracking (placeholder for future implementation)
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log(`Event: ${eventName}`, properties);
}

// Track important user interactions
document.addEventListener('click', (e) => {
    const element = e.target.closest('a, button');
    if (element) {
        const action = element.textContent.trim();
        const href = element.href;
        trackEvent('click', { action, href });
    }
});

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode = konamiCode.slice(-konamiSequence.length);
    }
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10000);
        
        alert('🎉 Konami Code Activated! You found the easter egg!');
        konamiCode = [];
    }
});

// Add rainbow animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Add entrance animations to elements
    const animatedElements = document.querySelectorAll(
        '.hero-content, .hero-image, .section-title, .about-text, .about-animation'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Cleanup function for memory management
window.addEventListener('beforeunload', () => {
    // Clean up any intervals or observers
    observer.disconnect();
    
    // Remove event listeners if needed
    // This helps prevent memory leaks
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        typewriterEffect,
        animateSkillBars,
        showSuccessMessage,
        downloadResume,
        trackEvent
    };
}

// AI Chat Widget Functionality
class ChatWidget {
    constructor() {
        // Use configuration from config.js or environment
        this.apiKey = this.getApiKey();
        this.apiUrl = CONFIG?.GEMINI_API?.URL || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
        this.isOpen = false;
        this.isTyping = false;
        
        this.initializeElements();
        this.setupEventListeners();
        this.setupPortfolioContext();
        
        // Show initial notification
        setTimeout(() => {
            this.showNotification();
        }, 3000);
    }
    
    // Secure API key retrieval method
    getApiKey() {
        // Priority order: Environment variable > Config file > Error
        if (typeof process !== 'undefined' && process.env && process.env.GEMINI_API_KEY) {
            return process.env.GEMINI_API_KEY;
        }
        
        if (typeof CONFIG !== 'undefined' && CONFIG.GEMINI_API && CONFIG.GEMINI_API.KEY) {
            if (CONFIG.GEMINI_API.KEY === 'YOUR_API_KEY_HERE') {
                console.warn('⚠️  Please set your actual API key in config.js');
                return null;
            }
            return CONFIG.GEMINI_API.KEY;
        }
        
        console.error('❌ No API key found. Please set GEMINI_API_KEY environment variable or update config.js');
        return null;
    }
    
    initializeElements() {
        this.chatToggle = document.getElementById('chatToggle');
        this.chatContainer = document.getElementById('chatContainer');
        this.chatClose = document.getElementById('chatClose');
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.chatSend = document.getElementById('chatSend');
        this.chatTyping = document.getElementById('chatTyping');
        this.chatNotification = document.getElementById('chatNotification');
        this.suggestionBtns = document.querySelectorAll('.suggestion-btn');
        
        // Debug: Check if all elements are found
        const elements = {
            chatToggle: this.chatToggle,
            chatContainer: this.chatContainer,
            chatClose: this.chatClose,
            chatMessages: this.chatMessages,
            chatInput: this.chatInput,
            chatSend: this.chatSend,
            chatTyping: this.chatTyping,
            chatNotification: this.chatNotification,
            suggestionBtns: this.suggestionBtns.length
        };
        
        console.log('Chat widget elements:', elements);
        
        // Check for missing elements
        Object.entries(elements).forEach(([key, element]) => {
            if (!element || (key === 'suggestionBtns' && element === 0)) {
                console.error(`❌ Missing chat element: ${key}`);
            }
        });
    }
    
    setupEventListeners() {
        // Add error handling for missing elements
        if (!this.chatToggle || !this.chatContainer || !this.chatClose || !this.chatInput || !this.chatSend) {
            console.error('❌ Cannot setup chat listeners: Missing required elements');
            return;
        }
        
        console.log('✅ Setting up chat event listeners...');
        
        this.chatToggle.addEventListener('click', () => {
            console.log('Chat toggle clicked');
            this.toggleChat();
        });
        
        this.chatClose.addEventListener('click', () => {
            console.log('Chat close clicked');
            this.closeChat();
        });
        
        this.chatSend.addEventListener('click', () => {
            console.log('Chat send clicked');
            this.sendMessage();
        });
        
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                console.log('Enter key pressed in chat input');
                this.sendMessage();
            }
        });
        
        this.suggestionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const suggestion = btn.getAttribute('data-suggestion');
                console.log('Suggestion clicked:', suggestion);
                this.chatInput.value = suggestion;
                this.sendMessage();
            });
        });
        
        // Close chat when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.chatToggle.contains(e.target) && !this.chatContainer.contains(e.target)) {
                this.closeChat();
            }
        });
        
        console.log('✅ Chat event listeners setup complete');
    }
    
    setupPortfolioContext() {
        this.portfolioData = {
            name: "Vamsi Siva Ganesh Seelam",
            role: "Data Analyst, Business Intelligence Expert & Full Stack Developer",
            education: "B.Tech CSE Data Science 2nd Year at Lovely Professional University (2023-2027)",
            location: "Punjab, India",
            email: "seelamvamsisivaganesh@gmail.com",
            phone: "+91 9346147336",
            skills: {
                dataScience: ["Python (92%)", "Data Structures & Algorithms (88%)", "Pandas & NumPy (85%)", "Data Visualization (82%)", "Machine Learning (78%)", "TensorFlow", "Scikit-learn"],
                businessAnalytics: ["Excel & Dashboards (90%)", "SQL for Analysis (88%)", "Power BI (87%)", "KPI Design & Reporting (85%)", "Tableau (85%)", "Market & Competitor Research (80%)"],
                fullStack: ["HTML/CSS/JavaScript (95%)", "React.js (90%)", "REST APIs (88%)", "Node.js & Express (85%)", "MongoDB & SQL (80%)"],
                cloud: ["Google Cloud Platform", "Amazon Web Services", "Git & GitHub", "CI/CD", "Agile/Scrum", "Security Practices"],
                softSkills: ["Communication & Presentation", "Critical Thinking", "Problem Solving", "Teamwork", "Time Management"],
                languages: ["English (Fluent)", "Telugu (Fluent)", "Hindi (Conversational)"]
            },
            projects: [
                "Data Visualization Dashboard - Interactive dashboard with Python, React, D3.js, Flask",
                "Predictive Analytics Model - ML model using Python, Scikit-learn, Pandas, TensorFlow",
                "E-Commerce Platform - Full-stack app with React, Node.js, MongoDB, Redux"
            ],
            experience: [
                "Founder & CEO at Balaveerulu - AI Comic Book Publisher (2024-Present)",
                "Google Cloud Program Participant - Google Arcade (June 2024)",
                "Graphic Design Intern - Near to College (2023)"
            ],
            certificates: [
                "Full Stack Web Development - freeCodeCamp (2023)",
                "Google Cloud Platform - Google Arcade (2024)",
                "C++ & Data Structures - Data Flair (2023)"
            ],
            socialLinks: {
                github: "https://github.com/Svamsi2006",
                linkedin: "https://www.linkedin.com/in/vamsi-/",
                instagram: "https://www.instagram.com/__vamsi__2006/",
                whatsapp: "https://wa.me/919346147336"
            },
            company: "Balaveerulu - AI Comic Book Publisher",
            companyUrl: "https://balaveerulu.vercel.app/"
        };
    }
    
    toggleChat() {
        console.log('toggleChat called, current isOpen:', this.isOpen);
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }
    
    openChat() {
        console.log('Opening chat...');
        this.isOpen = true;
        this.chatContainer.classList.add('active');
        this.chatInput.focus();
        this.hideNotification();
        
        // Track event
        trackEvent('chat_opened');
        console.log('Chat opened successfully');
    }
    
    closeChat() {
        console.log('Closing chat...');
        this.isOpen = false;
        this.chatContainer.classList.remove('active');
        console.log('Chat closed successfully');
    }
    
    showNotification() {
        this.chatNotification.style.opacity = '1';
        this.chatNotification.style.visibility = 'visible';
        this.chatNotification.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            this.hideNotification();
        }, 5000);
    }
    
    hideNotification() {
        this.chatNotification.style.opacity = '0';
        this.chatNotification.style.visibility = 'hidden';
        this.chatNotification.style.transform = 'translateY(10px)';
    }
    
    async sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message || this.isTyping) return;
        
        // Add user message
        this.addMessage(message, 'user');
        this.chatInput.value = '';
        
        // Show typing indicator
        this.showTyping();
        
        try {
            // Get AI response
            console.log('💬 User message:', message);
            const response = await this.getAIResponse(message);
            this.hideTyping();
            this.addMessage(response, 'bot');
            console.log('✅ Message sent successfully');
        } catch (error) {
            this.hideTyping();
            console.error('❌ Chat error details:', error);
            
            // Try fallback response first
            const fallbackResponse = this.getFallbackResponse(message);
            if (fallbackResponse) {
                this.addMessage(`${fallbackResponse}\n\n⚠️ Note: AI chat is temporarily unavailable, but I can still help with basic questions!`, 'bot');
                return;
            }
            
            let errorMessage = "I'm sorry, I'm having trouble connecting right now.";
            
            if (error.message.includes('API key not configured')) {
                errorMessage = "⚠️ AI chat is currently being configured. Please contact Vamsi directly for now!";
            } else if (error.message.includes('403')) {
                errorMessage = "🔑 API access issue. Please contact Vamsi directly!";
            } else if (error.message.includes('400')) {
                errorMessage = "📝 Message format issue. Try rephrasing your question!";
            } else if (error.message.includes('Network')) {
                errorMessage = "🌐 Network issue. Please check your connection and try again!";
            }
            
            errorMessage += "\n\n📧 Email: seelamvamsisivaganesh@gmail.com\n📱 WhatsApp: +91 9346147336";
            
            this.addMessage(errorMessage, 'bot');
        }
        
        // Track event
        trackEvent('chat_message_sent', { message: message.substring(0, 50) });
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas ${sender === 'user' ? 'fa-user' : 'fa-robot'}"></i>
            </div>
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${currentTime}</span>
            </div>
        `;
        
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    showTyping() {
        this.isTyping = true;
        this.chatTyping.style.display = 'flex';
        this.chatSend.disabled = true;
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    hideTyping() {
        this.isTyping = false;
        this.chatTyping.style.display = 'none';
        this.chatSend.disabled = false;
    }
    
    async getAIResponse(userMessage) {
        // Validate API key first
        if (!this.apiKey) {
            console.error('❌ API key not configured');
            throw new Error('API key not configured. Please check your configuration.');
        }
        
        console.log('🔑 API Key:', this.apiKey ? 'Present' : 'Missing');
        console.log('🌐 API URL:', this.apiUrl);
        
        const context = this.createContextPrompt(userMessage);
        console.log('📝 Context prompt created');
        
        const requestBody = {
            contents: [{
                parts: [{
                    text: context
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 300,
            }
        };
        
        console.log('📤 Sending request to Gemini API...');
        
        try {
            const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });
            
            console.log('📥 Response received:', response.status, response.statusText);
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error('❌ API Error Response:', errorText);
                throw new Error(`API Error (${response.status}): ${response.statusText}\n${errorText}`);
            }
            
            const data = await response.json();
            console.log('✅ API Response successful');
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
                return data.candidates[0].content.parts[0].text;
            } else {
                console.error('❌ Unexpected response format:', data);
                throw new Error('Unexpected response format from API');
            }
        } catch (error) {
            console.error('❌ Fetch error:', error);
            throw error;
        }
    }
    
    createContextPrompt(userMessage) {
        const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'];
        const isGreeting = greetings.some(greeting => 
            userMessage.toLowerCase().includes(greeting)
        );
        
        let baseContext = `You are Vamsi's AI assistant on his portfolio website. You represent ${this.portfolioData.name}, a ${this.portfolioData.role}.

IMPORTANT GUIDELINES:
- Be friendly, professional, and enthusiastic about Vamsi's work
- Keep responses concise (2-3 sentences max)
- Use emojis sparingly but effectively
- Always maintain a helpful and positive tone
- If asked about contact, provide his email: ${this.portfolioData.email}
- For technical questions, reference his actual skills and projects
- Be conversational and personable

VAMSI'S PROFILE:
- Name: ${this.portfolioData.name}
- Role: ${this.portfolioData.role}
- Education: ${this.portfolioData.education}
- Location: ${this.portfolioData.location}
- Company: ${this.portfolioData.company} (${this.portfolioData.companyUrl})

SKILLS:
- Data Science: ${this.portfolioData.skills.dataScience.join(', ')}
- Business Analytics: ${this.portfolioData.skills.businessAnalytics.join(', ')}
- Full Stack: ${this.portfolioData.skills.fullStack.join(', ')}
- Cloud & Tools: ${this.portfolioData.skills.cloud.join(', ')}

PROJECTS: ${this.portfolioData.projects.join('; ')}

EXPERIENCE: ${this.portfolioData.experience.join('; ')}

`;

        if (isGreeting) {
            return `${baseContext}
User said: "${userMessage}"

This is a greeting. Respond warmly and introduce yourself as Vamsi's AI assistant. Mention you're here to help with questions about his portfolio, skills, or projects. Keep it friendly and brief.`;
        } else {
            return `${baseContext}
User asked: "${userMessage}"

Provide a helpful, informative response based on Vamsi's portfolio information. If the question is about something not covered in his profile, politely redirect to his contact information or suggest they reach out directly.`;
        }
    }
    
    // Fallback responses for when AI is not available
    getFallbackResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        if (message.includes('skill') || message.includes('technical')) {
            return "🚀 Vamsi specializes in Data Science (Python, ML, Analytics), Business Intelligence (Power BI, Tableau, Excel), and Full Stack Development (React, Node.js). He's also experienced with cloud platforms like Google Cloud and AWS!";
        } else if (message.includes('project')) {
            return "💻 Vamsi has worked on several impressive projects including a Data Visualization Dashboard, Predictive Analytics Model, E-Commerce Platform, and his own AI Comic Book Publisher - Balaveerulu! Check out his portfolio for more details.";
        } else if (message.includes('contact') || message.includes('reach')) {
            return "📧 You can reach Vamsi at seelamvamsisivaganesh@gmail.com or WhatsApp him at +91 9346147336. He's always excited to discuss new opportunities!";
        } else if (message.includes('experience') || message.includes('work')) {
            return "💼 Vamsi is the Founder & CEO of Balaveerulu (AI Comic Book Publisher), completed Google Cloud Program, and has experience in graphic design. Currently pursuing B.Tech CSE with Data Science specialization at LPU!";
        } else if (message.includes('education') || message.includes('study')) {
            return "🎓 Vamsi is currently in his 3rd year of B.Tech Computer Science Engineering with specialization in Data Science & AI Web Development at Lovely Professional University (2023-2027).";
        } else {
            return "👋 Hi! I'm Vamsi's AI assistant. I can help you learn about his skills, projects, experience, and education. Feel free to ask about his technical expertise, work experience, or how to contact him!";
        }
    }
}

// Data Science Animation System
class DataScienceDemo {
    constructor() {
        this.canvas = document.getElementById('backgroundCanvas');
        this.ctx = this.canvas?.getContext('2d');
        this.particles = [];
        this.sparkles = [];
        this.isAutoMode = false;
        this.autoInterval = null;
        this.cleanData = [
            { id: 1, name: 'Alice', age: 28, score: 95, status: 'Active' },
            { id: 2, name: 'Bob', age: 32, score: 87, status: 'Active' },
            { id: 3, name: 'Carol', age: 25, score: 92, status: 'Pending' },
            { id: 4, name: 'David', age: 29, score: 88, status: 'Active' },
            { id: 5, name: 'Eve', age: 31, score: 96, status: 'Complete' }
        ];
        
        this.init();
    }
    
    init() {
        if (!this.canvas) return;
        
        this.setupCanvas();
        this.setupEventListeners();
        this.createParticleBackground();
        this.createDataParticles();
        this.animate();
        
        // Auto start after 2 seconds
        setTimeout(() => {
            this.startDataCleaning();
        }, 2000);
    }
    
    setupCanvas() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }
    
    setupEventListeners() {
        const startBtn = document.getElementById('startBtn');
        const resetBtn = document.getElementById('resetBtn');
        const autoBtn = document.getElementById('autoBtn');
        
        startBtn?.addEventListener('click', () => this.startDataCleaning());
        resetBtn?.addEventListener('click', () => this.resetDemo());
        autoBtn?.addEventListener('click', () => this.toggleAutoMode());
    }
    
    createParticleBackground() {
        for (let i = 0; i < 80; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: `hsl(${Math.random() * 360}, 70%, 60%)`,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    createDataParticles() {
        const dataChars = ['A', 'B', '1', '2', '#', '@', '$', '%', '&', '*'];
        const container = document.getElementById('dataParticles');
        if (!container) return;
        
        container.innerHTML = '';
        
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = dataChars[Math.floor(Math.random() * dataChars.length)];
            particle.style.animationDelay = `${Math.random() * 3}s`;
            particle.style.left = `${Math.random() * 80 + 10}%`;
            particle.style.top = `${Math.random() * 80 + 10}%`;
            container.appendChild(particle);
        }
    }
    
    async startDataCleaning() {
        this.clearTable();
        await this.createFallingParticles();
        await this.populateCleanTable();
        this.createSparkleEffect();
    }
    
    async createFallingParticles() {
        const dataChars = ['A', 'B', '1', '2', '#', '@', '$', '%', '&', '*'];
        const bowl = document.querySelector('.data-bowl');
        if (!bowl) return;
        
        const bowlRect = bowl.getBoundingClientRect();
        const containerRect = bowl.closest('.data-science-demo').getBoundingClientRect();
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'falling-particle';
            particle.textContent = dataChars[Math.floor(Math.random() * dataChars.length)];
            
            const startX = bowlRect.left - containerRect.left + Math.random() * bowlRect.width;
            const startY = bowlRect.top - containerRect.top + bowlRect.height / 2;
            
            particle.style.left = startX + 'px';
            particle.style.top = startY + 'px';
            particle.style.animationDelay = `${i * 0.1}s`;
            
            bowl.closest('.data-science-demo').appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 2000);
        }
        
        return new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    async populateCleanTable() {
        const tableBody = document.getElementById('tableBody');
        if (!tableBody) return;
        
        for (let i = 0; i < this.cleanData.length; i++) {
            const row = document.createElement('tr');
            const data = this.cleanData[i];
            
            row.innerHTML = `
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.age}</td>
                <td>${data.score}</td>
                <td>${data.status}</td>
            `;
            
            row.style.animationDelay = `${i * 0.2}s`;
            tableBody.appendChild(row);
            
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    }
    
    clearTable() {
        const tableBody = document.getElementById('tableBody');
        if (tableBody) {
            tableBody.innerHTML = '';
        }
    }
    
    createSparkleEffect() {
        const container = document.querySelector('.data-science-demo');
        if (!container) return;
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.animationDelay = `${Math.random() * 2}s`;
                
                container.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 2000);
            }, i * 200);
        }
    }
    
    resetDemo() {
        this.clearTable();
        this.createDataParticles();
        
        // Remove falling particles
        document.querySelectorAll('.falling-particle').forEach(p => p.remove());
        document.querySelectorAll('.sparkle').forEach(s => s.remove());
    }
    
    toggleAutoMode() {
        const autoBtn = document.getElementById('autoBtn');
        if (!autoBtn) return;
        
        this.isAutoMode = !this.isAutoMode;
        
        if (this.isAutoMode) {
            autoBtn.classList.add('active');
            this.autoInterval = setInterval(() => {
                this.startDataCleaning();
            }, 8000);
        } else {
            autoBtn.classList.remove('active');
            if (this.autoInterval) {
                clearInterval(this.autoInterval);
                this.autoInterval = null;
            }
        }
    }
    
    animate() {
        if (!this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw background particles
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x < 0 || particle.x > this.canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.speedY *= -1;
            
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = particle.color;
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize Chat Widget when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM loaded, initializing components...');
    
    // Initialize chat widget after a delay to ensure all other scripts are loaded
    setTimeout(() => {
        try {
            console.log('📡 Creating chat widget instance...');
            window.chatWidget = new ChatWidget();
            console.log('✅ Chat widget initialized successfully!');
        } catch (error) {
            console.error('❌ Failed to initialize chat widget:', error);
        }
    }, 1000);
    
    // Initialize data science demo
    setTimeout(() => {
        try {
            console.log('🔬 Creating data science demo...');
            window.dataScienceDemo = new DataScienceDemo();
            console.log('✅ Data science demo initialized successfully!');
        } catch (error) {
            console.error('❌ Failed to initialize data science demo:', error);
        }
    }, 1500);
});
