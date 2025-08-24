// Application Data
const businessData = {
  businessInfo: {
    name: "Angel G John Design Studio",
    tagline: "Where Architecture Meets Creative Innovation",
    description: "Transforming architectural precision into stunning visual narratives that captivate audiences and elevate brands.",
    founded: "2023",
    location: "India",
    email: "hello@angelgjohn.design",
    phone: "+91 98765 43210"
  },
  statistics: {
    projectsCompleted: 150,
    happyClients: 85,
    yearsExperience: 8,
    averageRating: 4.9
  },
  services: [
    {
      title: "Brand Identity Design",
      description: "Complete brand identity systems including logos, color palettes, typography, and brand guidelines.",
      startingPrice: "₹15,000",
      deliveryTime: "7-10 days",
      icon: "fas fa-palette",
      includes: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography Selection", "Business Card Design"]
    },
    {
      title: "Print Design Excellence",
      description: "Professional print materials including posters, brochures, flyers, and marketing collateral.",
      startingPrice: "₹5,000",
      deliveryTime: "3-5 days",
      icon: "fas fa-print",
      includes: ["Custom Layouts", "High-Resolution Files", "Print-Ready Formats", "Multiple Concepts", "Unlimited Revisions"]
    },
    {
      title: "Digital Marketing Assets",
      description: "Engaging digital graphics for social media, web banners, and online advertising campaigns.",
      startingPrice: "₹3,000",
      deliveryTime: "2-3 days",
      icon: "fas fa-bullhorn",
      includes: ["Social Media Graphics", "Web Banners", "Email Templates", "Ad Creative", "Multiple Formats"]
    },
    {
      title: "Logo & Badge Design",
      description: "Distinctive logos and badges that create memorable brand identities and professional recognition.",
      startingPrice: "₹8,000",
      deliveryTime: "5-7 days",
      icon: "fas fa-award",
      includes: ["Multiple Concepts", "Vector Files", "Various Formats", "Color Variations", "Usage Guidelines"]
    },
    {
      title: "Packaging Design",
      description: "Eye-catching packaging solutions that stand out on shelves and communicate brand values.",
      startingPrice: "₹12,000",
      deliveryTime: "7-14 days",
      icon: "fas fa-box",
      includes: ["3D Mockups", "Die-cut Templates", "Print Specifications", "Multiple Variations", "Branding Integration"]
    },
    {
      title: "Holiday & Seasonal Graphics",
      description: "Custom holiday cards, seasonal promotions, and festive marketing materials.",
      startingPrice: "₹2,500",
      deliveryTime: "1-3 days",
      icon: "fas fa-gifts",
      includes: ["Custom Illustrations", "Multiple Sizes", "Print & Digital Versions", "Personalization Options", "Bulk Discounts"]
    },
    {
      title: "Architectural Visualization",
      description: "Specialized graphics combining architectural knowledge with design expertise.",
      startingPrice: "₹20,000",
      deliveryTime: "10-15 days",
      icon: "fas fa-building",
      includes: ["Technical Drawings", "3D Renderings", "Floor Plan Graphics", "Presentation Layouts", "Professional Rendering"]
    },
    {
      title: "Web Graphics & Social Media",
      description: "Optimized graphics for websites, social platforms, and digital marketing campaigns.",
      startingPrice: "₹4,000",
      deliveryTime: "2-4 days",
      icon: "fas fa-laptop",
      includes: ["Responsive Designs", "Platform Optimization", "Animation Ready", "Brand Consistency", "Content Strategy"]
    }
  ],
  portfolio: {
    categories: ["All", "Brand Identity", "Print Design", "Digital Marketing", "Logos", "Packaging", "Architecture", "Holiday Graphics"],
    featured: [
      {
        title: "Tech Startup Brand Identity",
        category: "Brand Identity",
        client: "InnovateTech Solutions",
        description: "Complete brand identity system for a emerging technology startup, combining modern aesthetics with architectural precision.",
        year: 2024,
        categorySlug: "brand-identity"
      },
      {
        title: "Music Festival Poster Series",
        category: "Print Design",
        client: "Harmony Music Festival",
        description: "Dynamic poster series capturing the energy and diversity of a multi-day music festival.",
        year: 2024,
        categorySlug: "print-design"
      },
      {
        title: "Restaurant Brand Package",
        category: "Brand Identity",
        client: "Artisan Bistro",
        description: "Sophisticated branding for upscale restaurant including logo, menu design, and interior graphics.",
        year: 2023,
        categorySlug: "brand-identity"
      },
      {
        title: "E-commerce Social Media Campaign",
        category: "Digital Marketing",
        client: "Fashion Forward",
        description: "Comprehensive social media graphics package for luxury fashion e-commerce platform.",
        year: 2024,
        categorySlug: "digital-marketing"
      },
      {
        title: "Corporate Logo Redesign",
        category: "Logos",
        client: "TechCorp Solutions",
        description: "Modern logo redesign for established technology corporation, maintaining brand recognition while updating aesthetics.",
        year: 2023,
        categorySlug: "logos"
      },
      {
        title: "Artisan Coffee Packaging",
        category: "Packaging",
        client: "Roast & Co.",
        description: "Premium packaging design for artisan coffee brand emphasizing sustainability and craftsmanship.",
        year: 2024,
        categorySlug: "packaging"
      }
    ]
  },
  testimonials: [
    {
      name: "Rahul Sharma",
      company: "TechCorp India",
      role: "Marketing Director",
      rating: 5,
      text: "Angel's architectural background brings a unique structural approach to design that sets her work apart. Our brand identity perfectly captures our company's vision.",
      project: "Complete Brand Identity"
    },
    {
      name: "Priya Patel",
      company: "Green Earth NGO",
      role: "Communications Head",
      text: "The poster designs Angel created for our environmental campaign were not just beautiful—they told a story. Her attention to detail is remarkable.",
      rating: 5,
      project: "Campaign Poster Series"
    },
    {
      name: "David Wilson",
      company: "Startup Accelerator",
      role: "Program Manager",
      text: "Working with Angel has been fantastic. She understands both the creative and technical aspects, delivering designs that work perfectly across all applications.",
      rating: 5,
      project: "Digital Marketing Package"
    }
  ],
  process: [
    {
      step: 1,
      title: "Discovery & Brief",
      description: "Understanding your vision, goals, and requirements through detailed consultation and project brief analysis."
    },
    {
      step: 2,
      title: "Research & Strategy",
      description: "Market research, competitor analysis, and strategic planning to ensure designs align with your business objectives."
    },
    {
      step: 3,
      title: "Concept Development",
      description: "Creating initial concepts and design directions based on architectural principles and creative innovation."
    },
    {
      step: 4,
      title: "Design & Refinement",
      description: "Developing chosen concepts into polished designs with multiple iterations and client feedback integration."
    },
    {
      step: 5,
      title: "Delivery & Support",
      description: "Final file delivery in all required formats plus ongoing support for implementation and future needs."
    }
  ],
  formFields: {
    projectTypes: [
      "Brand Identity Design",
      "Print Design (Posters, Brochures, Flyers)",
      "Digital Marketing Assets",
      "Logo & Badge Design",
      "Packaging Design",
      "Holiday & Seasonal Graphics",
      "Architectural Visualization",
      "Web Graphics & Social Media",
      "Other - Please Specify"
    ],
    budgetRanges: [
      "Under ₹5,000",
      "₹5,000 - ₹15,000",
      "₹15,000 - ₹30,000",
      "₹30,000 - ₹50,000",
      "Above ₹50,000",
      "Let's Discuss"
    ],
    timelines: [
      "Rush Job (1-2 days)",
      "Standard (3-7 days)",
      "Complex Project (1-2 weeks)",
      "Large Project (2-4 weeks)",
      "Flexible Timeline"
    ]
  }
};

// Application State
let currentFormStep = 1;
let currentTestimonial = 0;
let isMenuOpen = false;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  renderServices();
  renderPortfolio();
  renderProcess();
  renderTestimonials();
  initializeForm();
  initializeChatbot();
  animateStatsOnScroll();
  animateSkillsOnScroll();
  initializeScrollAnimations();
  initializePortfolioFilters();
});

// Navigation Functions
function initializeNavigation() {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
      
      // Close mobile menu if open
      if (isMenuOpen && navMenu) {
        toggleMobileMenu();
      }
    });
  });

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      toggleMobileMenu();
    });
  }

  function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    if (navMenu) {
      navMenu.classList.toggle('active', isMenuOpen);
    }
    if (navToggle) {
      navToggle.classList.toggle('active', isMenuOpen);
    }
  }

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    if (nav) {
      if (window.scrollY > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  });

  // Active navigation highlighting
  window.addEventListener('scroll', updateActiveNavigation);
  
  function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = '#' + section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === currentSection) {
        link.classList.add('active');
      }
    });
  }

  // Add smooth scrolling for all anchor links
  document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]') || e.target.closest('a[href^="#"]')) {
      const link = e.target.matches('a[href^="#"]') ? e.target : e.target.closest('a[href^="#"]');
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const target = document.querySelector(targetId);
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    }
  });
}

// Services Rendering
function renderServices() {
  const servicesGrid = document.getElementById('services-grid');
  if (!servicesGrid) return;
  
  servicesGrid.innerHTML = businessData.services.map(service => `
    <div class="service-card" data-aos="fade-up">
      <div class="service-icon">
        <i class="${service.icon}"></i>
      </div>
      <h3>${service.title}</h3>
      <p class="service-description">${service.description}</p>
      <div class="service-meta">
        <span class="service-price">Starting from ${service.startingPrice}</span>
        <span class="service-time">${service.deliveryTime}</span>
      </div>
      <ul class="service-features">
        ${service.includes.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      <button class="btn btn--primary btn--full-width service-get-started" data-service="${service.title}">
        Get Started
      </button>
    </div>
  `).join('');

  // Add event listeners to service buttons
  const serviceButtons = document.querySelectorAll('.service-get-started');
  serviceButtons.forEach(button => {
    button.addEventListener('click', function() {
      const serviceTitle = this.getAttribute('data-service');
      selectService(serviceTitle);
    });
  });
}

function selectService(serviceTitle) {
  // Pre-select service in form
  const projectTypeSelect = document.getElementById('project-type');
  if (projectTypeSelect) {
    projectTypeSelect.value = serviceTitle;
  }
  
  // Scroll to contact form
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const offsetTop = contactSection.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Portfolio Rendering
function renderPortfolio() {
  const portfolioGrid = document.getElementById('portfolio-grid');
  if (!portfolioGrid) return;
  
  portfolioGrid.innerHTML = businessData.portfolio.featured.map(item => `
    <div class="portfolio-item" data-category="${item.categorySlug}" data-aos="fade-up">
      <div class="portfolio-image">
        <i class="fas fa-image"></i>
      </div>
      <div class="portfolio-content">
        <div class="portfolio-category">${item.category}</div>
        <h3>${item.title}</h3>
        <p class="portfolio-description">${item.description}</p>
        <div class="portfolio-meta">
          <span>${item.client}</span>
          <span>${item.year}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Portfolio Filters
function initializePortfolioFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter portfolio items
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Process Rendering
function renderProcess() {
  const processTimeline = document.getElementById('process-timeline');
  if (!processTimeline) return;
  
  processTimeline.innerHTML = businessData.process.map(step => `
    <div class="process-step" data-aos="fade-up" data-aos-delay="${step.step * 100}">
      <div class="process-number">${step.step}</div>
      <div class="process-content">
        <h3>${step.title}</h3>
        <p>${step.description}</p>
      </div>
    </div>
  `).join('');
}

// Testimonials Rendering and Carousel
function renderTestimonials() {
  const testimonialsCarousel = document.getElementById('testimonials-carousel');
  if (!testimonialsCarousel) return;
  
  testimonialsCarousel.innerHTML = businessData.testimonials.map((testimonial, index) => `
    <div class="testimonial-item ${index === 0 ? 'active' : ''}">
      <div class="testimonial-rating">
        ${Array.from({length: testimonial.rating}, () => '<i class="fas fa-star star"></i>').join('')}
      </div>
      <p class="testimonial-text">${testimonial.text}</p>
      <div class="testimonial-author">
        <div class="testimonial-name">${testimonial.name}</div>
        <div class="testimonial-role">${testimonial.role}, ${testimonial.company}</div>
      </div>
      <div class="testimonial-project">${testimonial.project}</div>
    </div>
  `).join('');
  
  // Auto-rotate testimonials
  setInterval(nextTestimonial, 5000);
}

function nextTestimonial() {
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  if (testimonialItems.length === 0) return;
  
  testimonialItems[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
  testimonialItems[currentTestimonial].classList.add('active');
}

// Form Handling
function initializeForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  
  // Populate form dropdowns
  const projectTypeSelect = document.getElementById('project-type');
  const budgetSelect = document.getElementById('budget');
  const timelineSelect = document.getElementById('timeline');
  
  if (projectTypeSelect) {
    businessData.formFields.projectTypes.forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type;
      projectTypeSelect.appendChild(option);
    });
  }
  
  if (budgetSelect) {
    businessData.formFields.budgetRanges.forEach(range => {
      const option = document.createElement('option');
      option.value = range;
      option.textContent = range;
      budgetSelect.appendChild(option);
    });
  }
  
  if (timelineSelect) {
    businessData.formFields.timelines.forEach(timeline => {
      const option = document.createElement('option');
      option.value = timeline;
      option.textContent = timeline;
      timelineSelect.appendChild(option);
    });
  }
  
  // Form submission
  contactForm.addEventListener('submit', handleFormSubmit);
}

function nextStep() {
  if (currentFormStep === 1) {
    // Validate step 1
    const requiredFields = ['name', 'email', 'project-type'];
    let isValid = true;
    
    requiredFields.forEach(fieldName => {
      const field = document.getElementById(fieldName);
      if (field && !field.value.trim()) {
        field.style.borderColor = 'var(--color-error)';
        isValid = false;
      } else if (field) {
        field.style.borderColor = 'var(--color-border)';
      }
    });
    
    if (isValid) {
      const step1 = document.getElementById('step-1');
      const step2 = document.getElementById('step-2');
      const progressStep2 = document.getElementById('progress-step-2');
      const progressFill = document.getElementById('progress-fill');
      
      if (step1) step1.classList.remove('active');
      if (step2) step2.classList.add('active');
      if (progressStep2) progressStep2.classList.add('active');
      if (progressFill) progressFill.style.width = '100%';
      
      currentFormStep = 2;
    }
  }
}

function previousStep() {
  if (currentFormStep === 2) {
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const progressStep2 = document.getElementById('progress-step-2');
    const progressFill = document.getElementById('progress-fill');
    
    if (step2) step2.classList.remove('active');
    if (step1) step1.classList.add('active');
    if (progressStep2) progressStep2.classList.remove('active');
    if (progressFill) progressFill.style.width = '50%';
    
    currentFormStep = 1;
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  
  // Collect form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());
  
  // Here you would typically send the data to your backend
  console.log('Form submission:', data);
  
  // Show success message
  alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
  
  // Reset form
  contactForm.reset();
  currentFormStep = 1;
  
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const progressStep2 = document.getElementById('progress-step-2');
  const progressFill = document.getElementById('progress-fill');
  
  if (step2) step2.classList.remove('active');
  if (step1) step1.classList.add('active');
  if (progressStep2) progressStep2.classList.remove('active');
  if (progressFill) progressFill.style.width = '50%';
}

// Statistics Animation
function animateStatsOnScroll() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateNumber(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  });
  
  statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = target === businessData.statistics.averageRating ? 
      current.toFixed(1) : Math.floor(current);
  }, 40);
}

// Skills Animation
function animateSkillsOnScroll() {
  const skillBars = document.querySelectorAll('.skill-progress');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width;
        observer.unobserve(entry.target);
      }
    });
  });
  
  skillBars.forEach(bar => observer.observe(bar));
}

// Chatbot Functionality
function initializeChatbot() {
  const chatbotButton = document.getElementById('chatbot-button');
  const chatbotPanel = document.getElementById('chatbot-panel');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');
  
  if (!chatbotButton || !chatbotPanel) return;
  
  chatbotButton.addEventListener('click', function(e) {
    e.preventDefault();
    toggleChatbot();
  });
  
  if (chatbotClose) {
    chatbotClose.addEventListener('click', function(e) {
      e.preventDefault();
      closeChatbot();
    });
  }
  
  if (chatbotInput && chatbotSend) {
    chatbotSend.addEventListener('click', function(e) {
      e.preventDefault();
      sendChatMessage();
    });
    
    chatbotInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendChatMessage();
      }
    });
  }

  function toggleChatbot() {
    if (chatbotPanel) {
      chatbotPanel.classList.toggle('active');
      if (chatbotPanel.classList.contains('active')) {
        const notification = document.querySelector('.chatbot-notification');
        if (notification) {
          notification.style.display = 'none';
        }
      }
    }
  }

  function closeChatbot() {
    if (chatbotPanel) {
      chatbotPanel.classList.remove('active');
    }
  }

  function sendChatMessage() {
    if (!chatbotInput) return;
    
    const message = chatbotInput.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    chatbotInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      addChatMessage(botResponse, 'bot');
    }, 1000);
  }
}

function addChatMessage(message, type) {
  const chatBody = document.querySelector('.chatbot-body');
  if (!chatBody) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `chatbot-message ${type}-message`;
  
  messageDiv.innerHTML = `
    <div class="message-avatar">
      <i class="fas ${type === 'bot' ? 'fa-robot' : 'fa-user'}"></i>
    </div>
    <div class="message-content">
      <p>${message}</p>
    </div>
  `;
  
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  if (message.includes('price') || message.includes('cost')) {
    return "Our services start from ₹2,500 for seasonal graphics up to ₹20,000+ for architectural visualization. Would you like to discuss your specific project requirements?";
  } else if (message.includes('portfolio') || message.includes('work')) {
    return "You can view our featured work in the portfolio section above. We've worked with tech startups, restaurants, NGOs, and more. What type of project are you interested in?";
  } else if (message.includes('time') || message.includes('delivery')) {
    return "Delivery times range from 1-3 days for rush jobs to 2-4 weeks for large projects. It depends on the complexity and scope of your project. What's your timeline?";
  } else if (message.includes('contact') || message.includes('call')) {
    return "You can reach us at hello@angelgjohn.design or +91 98765 43210. You can also fill out our project form above for a detailed consultation!";
  } else {
    return "Thanks for your message! I'm here to help you with information about our design services. You can ask about pricing, portfolio, timelines, or contact details. How can I assist you today?";
  }
}

// Scroll Animations
function initializeScrollAnimations() {
  // Simple fade-in animation for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements with scroll animation
  document.querySelectorAll('.service-card, .portfolio-item, .process-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Make functions globally available
window.nextStep = nextStep;
window.previousStep = previousStep;

// Newsletter Subscription
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      
      if (email) {
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
      }
    });
  }
});

// Loading Animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});