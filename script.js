// MoonjCraft Modern Functionality

// --- BACKEND CONFIGURATION ---
// IMPORTANT: Follow the steps in BACKEND_SETUP.md to get your URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw4G_0P1-z0TJuG9fWePmwm5PwcjOsdcAEQwAhfrJ2R0si6LIDw9EBnZmt1dHaNj7FVjg/exec';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Scroll Animations
    initReveal();

    // Initialize Hero Slider
    initHeroSlider();

    // Initialize Smooth Scrolling
    initSmoothScroll();

    // Header Scroll Effect
    initHeaderScroll();

    // Initialize Lightbox
    initLightbox();

    // Initialize Mobile Menu
    initMobileMenu();

    // Initialize Gallery Lightbox
    initGalleryLightbox();

    // Initialize Back to Top
    initBackToTop();

    // Initialize WhatsApp Float
    initWhatsAppFloat();
});

/**
 * WhatsApp floating button
 */
function initWhatsAppFloat() {
    if (document.querySelector('.whatsapp-float')) return;
    const btn = document.createElement('a');
    btn.href = 'https://wa.me/918447236068';
    btn.className = 'whatsapp-float';
    btn.target = '_blank';
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-93.8-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.6-2.8-23.6-8.7-45-26.4-16.6-14.8-27.8-33.1-31.1-38.6-3.2-5.5-.3-8.5 2.5-11.2 2.5-2.5 5.5-6.5 8.3-9.8 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>';
    btn.title = 'Chat with us on WhatsApp';
    document.body.appendChild(btn);
}

/**
 * Back to Top button logic
 */
function initBackToTop() {
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Hero background slider logic
 */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length <= 1) return;

    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, slideInterval);
}

/**
 * Mobile sidebar menu toggle logic
 */
function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const closeBtn = document.getElementById('close-sidebar');

    if (!toggle || !sidebar || !overlay) return;

    const toggleMenu = () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
    };

    toggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

/**
 * Reveal elements as they enter the viewport
 */
function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(el => revealObserver.observe(el));
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.includes('.html')) return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Change header style on scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('header');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
            if (scrollIndicator) scrollIndicator.style.opacity = '0';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = 'none';
            if (scrollIndicator) scrollIndicator.style.opacity = '0.7';
        }
    });
}

/**
 * Lightbox for viewing full images
 */
function initLightbox() {
    // Create lightbox HTML if it doesn't exist
    if (!document.getElementById('lightbox')) {
        const lb = document.createElement('div');
        lb.id = 'lightbox';
        lb.className = 'lightbox-modal';
        lb.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-content" id="lightbox-img">
            <div id="lightbox-caption"></div>
        `;
        document.body.appendChild(lb);
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');

    // Add click listener to all product images
    document.addEventListener('click', (e) => {
        const target = e.target;
        
        // Check if the clicked element is a product image we want to zoom
        // On product pages, we always want the lightbox. 
        // On cards, we only trigger if there's no redirect or if we want to prioritize zoom.
        const isProductPageImage = (target.id === 'main-product-image' || target.closest('.main-image-container'));
        const isCardImage = target.closest('.product-card') && !target.closest('.thumbnail');

        if (isProductPageImage || (isCardImage && window.location.pathname.includes('product.html'))) {
            // Prevent redirect if we are already on product page or if it's a dedicated zoom action
            if (target.getAttribute('onclick')) {
                // If it's a card on the product page (similar items), we might want to let it redirect
                // unless we specifically want to lightbox similar items too.
                // Let's allow lightbox for main image and cards ONLY if they don't have a redirect
                // OR if we are on the product page.
            }
            
            lightbox.style.display = 'block';
            lightboxImg.src = target.src;
            lightboxCaption.textContent = target.alt || 'MoonjCraft Handcrafted Product';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            e.preventDefault();
            e.stopPropagation();
        }
    }, true); // Use capture phase to intercept before inline onclick

    // Close lightbox
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.onclick = closeLightbox;
    lightbox.onclick = (e) => {
        if (e.target === lightbox) closeLightbox();
    };

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });
}

/**
 * General helper to submit data to Google Sheets
 * Optimized to avoid CORS preflight issues and provide a timeout
 */
async function submitToBackend(data) {
    if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE' || GOOGLE_SCRIPT_URL === '') {
        console.warn('Backend URL not configured. Data not saved.');
        return { result: 'not_configured' };
    }

    // We use a timeout to ensure the UI never hangs indefinitely
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
        // We do NOT set 'Content-Type': 'application/json' because it triggers 
        // a CORS preflight (OPTIONS) which Google Apps Script doesn't handle.
        // Fetching with 'no-cors' and a string body defaults to text/plain, 
        // which GAS can still parse using JSON.parse(e.postData.contents).
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            signal: controller.signal,
            body: JSON.stringify(data)
        });
        
        clearTimeout(timeoutId);
        return { result: 'success' };
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            console.warn('Submission timed out, but likely reached the server.');
            return { result: 'timeout' };
        }
        console.error('Submission error:', error);
        return { result: 'error', error };
    }
}

/**
 * Show a persistent toast notification when an item is added to the quote
 * If already shown, updates the message to handle multiple clicks
 */
function showToast(message, linkText, linkUrl) {
    let toast = document.getElementById('toast-notification');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }

    toast.innerHTML = `
        <div class="toast-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <div class="toast-content">
            <p>${message}</p>
            <a href="${linkUrl}">${linkText}</a>
        </div>
        <span class="toast-close" onclick="this.parentElement.classList.remove('show')">&times;</span>
    `;

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Pulse effect to show it updated if already visible
    if (toast.classList.contains('show')) {
        toast.style.transform = 'scale(1.05)';
        setTimeout(() => toast.style.transform = 'scale(1)', 200);
    }
}

// Export for dynamic content
window.initReveal = initReveal;
window.initLightbox = initLightbox;
window.initGalleryLightbox = initGalleryLightbox;
window.submitToBackend = submitToBackend;
window.showToast = showToast;

/**
 * Gallery Lightbox - Full screen viewer with drag/swipe navigation
 */
function initGalleryLightbox() {
    const lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox) {
        const lb = document.createElement('div');
        lb.id = 'gallery-lightbox';
        lb.className = 'gallery-lightbox';
        lb.innerHTML = `
            <div class="gallery-lightbox-header">
                <span class="gallery-lightbox-counter"><span id="lb-current">1</span> / <span id="lb-total">1</span></span>
                <button class="gallery-lightbox-close" id="lb-close">&times;</button>
            </div>
            <div class="gallery-lightbox-content" id="lb-content">
                <img class="gallery-lightbox-item" id="lb-item" src="" alt="">
            </div>
            <button class="gallery-lightbox-nav prev" id="lb-prev">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="gallery-lightbox-nav next" id="lb-next">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            <div class="gallery-lightbox-footer" id="lb-dots"></div>
        `;
        document.body.appendChild(lb);
    }

    const lbEl = document.getElementById('gallery-lightbox');
    const lbItem = document.getElementById('lb-item');
    const lbContent = document.getElementById('lb-content');
    const lbCurrent = document.getElementById('lb-current');
    const lbTotal = document.getElementById('lb-total');
    const lbDots = document.getElementById('lb-dots');
    const lbClose = document.getElementById('lb-close');
    const lbPrev = document.getElementById('lb-prev');
    const lbNext = document.getElementById('lb-next');

    let allImages = [];
    let currentIndex = 0;
    let dragStartX = 0;
    let dragOffset = 0;
    let isDragging = false;

    const collectImages = () => {
        const imgItems = document.querySelectorAll('.gallery-image-item img');
        const videoItems = document.querySelectorAll('.gallery-video-item img');
        allImages = [];
        imgItems.forEach((img, i) => {
            allImages.push({ src: img.src, type: 'image', index: i });
        });
        videoItems.forEach((img, i) => {
            allImages.push({ src: img.src, type: 'video', index: i });
        });
    };

    const updateLightbox = (index, animate = true) => {
        currentIndex = Math.max(0, Math.min(index, allImages.length - 1));
        lbItem.src = allImages[currentIndex].src;
        lbCurrent.textContent = currentIndex + 1;
        lbTotal.textContent = allImages.length;

        // Update dots
        lbDots.innerHTML = allImages.map((_, i) =>
            `<div class="gallery-lightbox-dot ${i === currentIndex ? 'active' : ''}" data-index="${i}"></div>`
        ).join('');

        // Add click handlers to dots
        lbDots.querySelectorAll('.gallery-lightbox-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                updateLightbox(parseInt(dot.dataset.index));
            });
        });

        // Update nav buttons visibility
        lbPrev.style.opacity = allImages.length <= 1 ? '0' : '1';
        lbNext.style.opacity = allImages.length <= 1 ? '0' : '1';
    };

    const showLightbox = (index) => {
        collectImages();
        if (allImages.length === 0) return;
        updateLightbox(index);
        lbEl.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const hideLightbox = () => {
        lbEl.classList.remove('active');
        document.body.style.overflow = '';
    };

    const nextImage = () => {
        if (currentIndex >= allImages.length - 1) {
            updateLightbox(0);
        } else {
            updateLightbox(currentIndex + 1);
        }
    };

    const prevImage = () => {
        if (currentIndex <= 0) {
            updateLightbox(allImages.length - 1);
        } else {
            updateLightbox(currentIndex - 1);
        }
    };

    // Event listeners for lightbox navigation
    lbClose.addEventListener('click', hideLightbox);
    lbPrev.addEventListener('click', nextImage);
    lbNext.addEventListener('click', prevImage);

    lbEl.addEventListener('click', (e) => {
        if (e.target === lbEl || e.target === lbContent) {
            hideLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lbEl.classList.contains('active')) return;
        if (e.key === 'Escape') hideLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });

    // Touch swipe for lightbox
    let touchStartX = 0;
    let touchMovedX = 0;

    lbContent.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });

    lbContent.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        touchMovedX = e.touches[0].clientX;
    }, { passive: true });

    lbContent.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        const movedBy = touchMovedX - touchStartX;
        if (movedBy < -50) nextImage();
        else if (movedBy > 50) prevImage();
        touchStartX = 0;
        touchMovedX = 0;
    });

    // Mouse drag for lightbox
    lbContent.addEventListener('mousedown', (e) => {
        dragStartX = e.clientX;
        isDragging = true;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        dragOffset = e.clientX - dragStartX;
    });

    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        if (dragOffset < -80) nextImage();
        else if (dragOffset > 80) prevImage();
        dragOffset = 0;
    });

    // Attach click handlers to gallery items
    document.addEventListener('click', (e) => {
        const imageItem = e.target.closest('.gallery-image-item');
        const videoItem = e.target.closest('.gallery-video-item');

        if (imageItem) {
            const img = imageItem.querySelector('img');
            const index = Array.from(document.querySelectorAll('.gallery-image-item img')).indexOf(img);
            showLightbox(index);
        } else if (videoItem) {
            const img = videoItem.querySelector('img');
            const imgIndex = Array.from(document.querySelectorAll('.gallery-image-item img')).length;
            const videoIndex = Array.from(document.querySelectorAll('.gallery-video-item img')).indexOf(img);
            showLightbox(imgIndex + videoIndex);
        }
    });

    // Re-collect images when gallery is dynamically populated
    const originalGenerateGalleryHTML = window.generateGalleryHTML;
    if (originalGenerateGalleryHTML) {
        window.generateGalleryHTML = function() {
            originalGenerateGalleryHTML();
            collectImages();
        };
    }
}
