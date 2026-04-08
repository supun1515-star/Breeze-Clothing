document.addEventListener('DOMContentLoaded', () => {
    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
                navbar.classList.remove('py-4');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('nav-scrolled');
                navbar.classList.remove('py-2');
                navbar.classList.add('py-4');
            }
        });
    }

    // --- Mobile Menu Toggle ---
    const setupMobileMenu = (btnId, menuId) => {
        const btn = document.getElementById(btnId);
        const menu = document.getElementById(menuId);
        
        if (btn && menu) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });
        }
    };
    
    setupMobileMenu('mobile-menu-btn', 'mobile-menu'); // Home
    setupMobileMenu('mobile-menu-btn-inner', 'mobile-menu-inner'); // Shop
    setupMobileMenu('mobile-menu-btn-contact', 'mobile-menu-contact'); // Contact


    // --- Video Slider Logic ---
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dot');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        const showSlide = (index) => {
            // Reset all slides
            slides.forEach((slide, i) => {
                slide.classList.remove('opacity-100', 'z-20');
                slide.classList.add('opacity-0', 'z-0');
                
                // Reset animations in the slide by removing and re-adding elements (or simply toggling classes doesn't re-trigger CSS animations easily)
                // A trick is to just keep the opacity transition on the wrapper
            });
            
            dots.forEach(dot => {
                dot.classList.remove('bg-white', 'scale-110');
                dot.classList.add('bg-white/40');
            });

            // Show current
            slides[index].classList.remove('opacity-0', 'z-0');
            slides[index].classList.add('opacity-100', 'z-20');
            
            if (dots[index]) {
                dots[index].classList.remove('bg-white/40');
                dots[index].classList.add('bg-white', 'scale-110');
            }
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };

        const prevSlideFunc = () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        };

        // Start auto-slide
        const startSlideShow = () => {
            slideInterval = setInterval(nextSlide, 7000); // 7 seconds per slide
        };

        const resetInterval = () => {
            clearInterval(slideInterval);
            startSlideShow();
        };

        // Event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlideFunc();
                resetInterval();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
                resetInterval();
            });
        });

        // Initialize
        startSlideShow();
    }
});
