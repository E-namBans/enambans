document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Portfolio Gallery
    const portfolioItems = [
        {
            title: 'Modern Living Room',
            description: 'Warm neutral tones for a cozy atmosphere',
            image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Office Building',
            description: 'Commercial exterior painting project',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Kitchen Cabinets',
            description: 'Cabinet refinishing with durable finish',
            image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Accent Wall',
            description: 'Custom decorative finish for bedroom',
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: 'Historic Home',
            description: 'Exterior restoration painting',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            title: "Children's Room",
            description: 'Fun mural painting for kids bedroom',
            image: 'https://images.unsplash.com/photo-1578898887932-dce23a595ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        }
    ];
    
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // Testimonials Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const sliderControls = document.getElementById('slider-controls');
    let currentTestimonial = 0;
    
    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'slider-dot';
        if (index === 0) dot.classList.add('active');
        dot.dataset.index = index;
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
        sliderControls.appendChild(dot);
    });
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        document.querySelectorAll('.slider-dot').forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        document.querySelector(`.slider-dot[data-index="${index}"]`).classList.add('active');
        currentTestimonial = index;
    }
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Animate stats counting
    const stats = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                stat.textContent = Math.floor(current);
                
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, 20);
        });
    }
    
    // Trigger stats animation when scrolled to
    window.addEventListener('scroll', function() {
        const aboutSection = document.querySelector('.about');
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (aboutPosition < screenPosition) {
            animateStats();
            // Remove event listener after triggering once
            window.removeEventListener('scroll', arguments.callee);
        }
    });
    
    // Form submission with WhatsApp integration
    const estimateForm = document.getElementById('estimateForm');
    
    estimateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        const contactMethod = document.querySelector('input[name="contact-method"]:checked').value;
        
        if (contactMethod === 'whatsapp') {
            // Format WhatsApp message
            const whatsappMessage = `Hello MasterStroke Painters!%0A%0AI'm interested in your ${service} service.%0A%0AMy details:%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage:%0A${message || 'No additional details provided'}`;
            
            // Open WhatsApp with pre-filled message
            window.open(`https://wa.me/+233 541241208?text=${whatsappMessage}`, '_blank');
            
            // Show confirmation
            alert(`Thank you, ${name}! You'll now be directed to WhatsApp to complete your request.`);
        } else {
            // Here you would typically send this data to a server
            // For this example, we'll just show an alert
            alert(`Thank you, ${name}! Your estimate request has been received. We'll contact you soon via ${contactMethod}.`);
        }
        
        // Reset form
        estimateForm.reset();
    });
    
    // Replace with your actual WhatsApp number
    function updateWhatsAppLinks() {
        const whatsappNumber = '+233541241208'; // Replace with your number (no + or 00)
        const whatsappLinks = document.querySelectorAll('[href*="wa.me"]');
        
        whatsappLinks.forEach(link => {
            link.href = `https://wa.me/${whatsappNumber}`;
        });
    }
    
    updateWhatsAppLinks();
});