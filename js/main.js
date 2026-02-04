/**
 * Oasis Church Aberdeen - Main JavaScript
 */

(function() {
  'use strict';

  // DOM Elements
  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

  // ============================================
  // Mobile Navigation Toggle
  // ============================================
  
  function toggleMobileNav() {
    if (!navToggle || !mobileNav) return;
    
    const isOpen = mobileNav.classList.contains('mobile-nav--open');
    
    navToggle.classList.toggle('nav-toggle--active');
    mobileNav.classList.toggle('mobile-nav--open');
    
    // Update ARIA attributes
    navToggle.setAttribute('aria-expanded', !isOpen);
    mobileNav.setAttribute('aria-hidden', isOpen);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  function closeMobileNav() {
    if (!navToggle || !mobileNav) return;
    
    navToggle.classList.remove('nav-toggle--active');
    mobileNav.classList.remove('mobile-nav--open');
    navToggle.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Event listeners for mobile nav
  if (navToggle) {
    navToggle.addEventListener('click', toggleMobileNav);
  }

  // Close mobile nav when clicking a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close mobile nav on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav?.classList.contains('mobile-nav--open')) {
      closeMobileNav();
      navToggle?.focus();
    }
  });

  // Close mobile nav on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      closeMobileNav();
    }
  });

  // ============================================
  // Header Scroll Effect
  // ============================================
  
  let lastScrollY = 0;
  
  function handleScroll() {
    if (!header) return;
    
    const currentScrollY = window.scrollY;
    
    // Add scrolled class when scrolled past threshold
    if (currentScrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    
    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ============================================
  // Accordion Functionality
  // ============================================
  
  function initAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
      const items = accordion.querySelectorAll('.accordion__item');
      
      items.forEach(item => {
        const header = item.querySelector('.accordion__header');
        
        if (header) {
          header.addEventListener('click', () => {
            const isOpen = item.classList.contains('accordion__item--open');
            
            // Close all items in this accordion (optional: remove for multi-open)
            items.forEach(i => i.classList.remove('accordion__item--open'));
            
            // Toggle current item
            if (!isOpen) {
              item.classList.add('accordion__item--open');
            }
          });

          // Keyboard support
          header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              header.click();
            }
          });
        }
      });
    });
  }

  // ============================================
  // Form Handling
  // ============================================
  
  function initForms() {
    const forms = document.querySelectorAll('form[data-netlify="true"], form[netlify]');
    
    forms.forEach(form => {
      form.addEventListener('submit', handleFormSubmit);
    });
  }

  async function handleFormSubmit(e) {
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const messageContainer = form.querySelector('.form__message') || createMessageContainer(form);
    
    // Basic validation
    if (!form.checkValidity()) {
      return; // Let browser handle validation
    }

    // Show loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    // Clear previous messages
    messageContainer.classList.remove('form__message--success', 'form__message--error');
    messageContainer.textContent = '';
    messageContainer.style.display = 'none';
  }

  function createMessageContainer(form) {
    const container = document.createElement('div');
    container.className = 'form__message';
    container.style.display = 'none';
    form.insertBefore(container, form.firstChild);
    return container;
  }

  function showFormMessage(form, type, message) {
    const container = form.querySelector('.form__message');
    if (container) {
      container.className = `form__message form__message--${type}`;
      container.textContent = message;
      container.style.display = 'block';
    }
  }

  // ============================================
  // Copy to Clipboard
  // ============================================
  
  function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
      btn.addEventListener('click', async () => {
        const textToCopy = btn.dataset.copy;
        
        if (!textToCopy) return;
        
        try {
          await navigator.clipboard.writeText(textToCopy);
          
          // Visual feedback
          const originalText = btn.textContent;
          btn.classList.add('copy-btn--copied');
          btn.textContent = 'Copied!';
          
          setTimeout(() => {
            btn.classList.remove('copy-btn--copied');
            btn.textContent = originalText;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      });
    });
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Close mobile nav if open
          closeMobileNav();
        }
      });
    });
  }

  // ============================================
  // Filter Tabs (for Sermons, etc.)
  // ============================================
  
  function initFilterTabs() {
    const filterContainers = document.querySelectorAll('[data-filter-container]');
    
    filterContainers.forEach(container => {
      const tabs = container.querySelectorAll('.filter-tab');
      const items = document.querySelectorAll(container.dataset.filterTarget);
      
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const filter = tab.dataset.filter;
          
          // Update active tab
          tabs.forEach(t => t.classList.remove('filter-tab--active'));
          tab.classList.add('filter-tab--active');
          
          // Filter items
          items.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    });
  }

  // ============================================
  // Quiz Functionality
  // ============================================
  
  class Quiz {
    constructor(container) {
      this.container = container;
      this.questions = JSON.parse(container.dataset.questions || '[]');
      this.currentIndex = 0;
      this.score = 0;
      this.answers = [];
      
      if (this.questions.length > 0) {
        this.init();
      }
    }

    init() {
      this.renderQuestion();
    }

    renderQuestion() {
      const question = this.questions[this.currentIndex];
      const progress = ((this.currentIndex) / this.questions.length) * 100;
      
      this.container.innerHTML = `
        <div class="quiz__progress">
          <div class="quiz__progress-bar" style="width: ${progress}%"></div>
        </div>
        <p class="quiz__question-number">Question ${this.currentIndex + 1} of ${this.questions.length}</p>
        <h3 class="quiz__question">${question.question}</h3>
        <div class="quiz__options">
          ${question.options.map((option, i) => `
            <button class="quiz__option" data-index="${i}">${option}</button>
          `).join('')}
        </div>
      `;

      // Add click handlers
      this.container.querySelectorAll('.quiz__option').forEach(btn => {
        btn.addEventListener('click', () => this.selectAnswer(parseInt(btn.dataset.index)));
      });
    }

    selectAnswer(index) {
      const question = this.questions[this.currentIndex];
      const isCorrect = index === question.correct;
      
      if (isCorrect) {
        this.score++;
      }
      
      this.answers.push({ index, isCorrect });
      
      // Show feedback
      const options = this.container.querySelectorAll('.quiz__option');
      options.forEach((opt, i) => {
        opt.disabled = true;
        if (i === question.correct) {
          opt.classList.add('quiz__option--correct');
        } else if (i === index && !isCorrect) {
          opt.classList.add('quiz__option--incorrect');
        }
      });

      // Move to next question after delay
      setTimeout(() => {
        this.currentIndex++;
        if (this.currentIndex < this.questions.length) {
          this.renderQuestion();
        } else {
          this.showResults();
        }
      }, 1500);
    }

    showResults() {
      const percentage = Math.round((this.score / this.questions.length) * 100);
      
      this.container.innerHTML = `
        <div class="quiz__results">
          <h3 class="quiz__score">${this.score}/${this.questions.length}</h3>
          <p>You scored ${percentage}%</p>
          <button class="btn btn--primary mt-lg" onclick="location.reload()">Try Again</button>
        </div>
      `;
    }
  }

  function initQuizzes() {
    document.querySelectorAll('[data-quiz]').forEach(container => {
      new Quiz(container);
    });
  }

  // ============================================
  // Lazy Loading Images
  // ============================================
  
  function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported
      document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
        img.loading = 'lazy';
      });
    } else {
      // Fallback for older browsers
      const lazyImages = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  // ============================================
  // Mobile Dropdown Toggle
  // ============================================
  
  function initMobileDropdowns() {
    const dropdownItems = document.querySelectorAll('.mobile-nav__item--dropdown');
    
    dropdownItems.forEach(item => {
      const link = item.querySelector('.mobile-nav__link');
      
      if (link) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          item.classList.toggle('mobile-nav__item--open');
        });
      }
    });
  }

  // ============================================
  // Sermons Page Functionality
  // ============================================
  
  function initSermonsPage() {
    const sermonGrid = document.getElementById('sermon-grid');
    const seriesFilter = document.getElementById('series-filter');
    const sermonEmpty = document.getElementById('sermon-empty');
    const toggleBtns = document.querySelectorAll('.sermons-toggle__btn');
    
    if (!sermonGrid) return;
    
    // Series filter
    if (seriesFilter) {
      seriesFilter.addEventListener('change', () => {
        const selectedSeries = seriesFilter.value;
        const cards = sermonGrid.querySelectorAll('.sermon-card');
        let visibleCount = 0;
        
        cards.forEach(card => {
          const cardSeries = card.dataset.series;
          if (selectedSeries === 'all' || cardSeries === selectedSeries) {
            card.style.display = '';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });
        
        // Show/hide empty state
        if (sermonEmpty) {
          sermonEmpty.style.display = visibleCount === 0 ? 'block' : 'none';
        }
      });
    }
    
    // Video/Audio toggle
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toggleBtns.forEach(b => {
          b.classList.remove('sermons-toggle__btn--active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('sermons-toggle__btn--active');
        btn.setAttribute('aria-selected', 'true');
        
        // Could add logic here to switch between video/audio content
        const mediaType = btn.dataset.media;
        console.log('Switched to:', mediaType);
      });
    });
  }

  // ============================================
  // Giving Page Functionality
  // ============================================
  
  function initGivingPage() {
    const amountBtns = document.querySelectorAll('.giving-amount');
    const frequencyBtns = document.querySelectorAll('.giving-frequency');
    
    // Amount selection
    amountBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        amountBtns.forEach(b => b.classList.remove('btn--primary'));
        amountBtns.forEach(b => b.classList.add('btn--outline'));
        btn.classList.remove('btn--outline');
        btn.classList.add('btn--primary');
      });
    });
    
    // Frequency toggle
    frequencyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        frequencyBtns.forEach(b => b.classList.remove('giving-frequency--active'));
        btn.classList.add('giving-frequency--active');
      });
    });
    
    // Copy buttons with better feedback
    const copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', async () => {
        const textToCopy = btn.dataset.copy;
        if (!textToCopy) return;
        
        try {
          await navigator.clipboard.writeText(textToCopy);
          btn.classList.add('copied');
          
          // Change icon to checkmark temporarily
          const originalHTML = btn.innerHTML;
          btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
          
          setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = originalHTML;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      });
    });
  }

  // ============================================
  // Podcasts Page Functionality
  // ============================================
  
  function initPodcastsPage() {
    const categoryBtns = document.querySelectorAll('.podcast-categories .filter-tab');
    const podcastCards = document.querySelectorAll('.podcast-recommendation-card');
    
    if (categoryBtns.length === 0) return;
    
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        
        // Update active state
        categoryBtns.forEach(b => b.classList.remove('filter-tab--active'));
        btn.classList.add('filter-tab--active');
        
        // Filter cards
        podcastCards.forEach(card => {
          const cardCategory = card.dataset.category;
          if (category === 'all' || cardCategory === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ============================================
  // Initialize Everything
  // ============================================
  
  function init() {
    initAccordions();
    initForms();
    initCopyButtons();
    initSmoothScroll();
    initFilterTabs();
    initQuizzes();
    initLazyLoading();
    initMobileDropdowns();
    initSermonsPage();
    initGivingPage();
    initPodcastsPage();
    
    // Run scroll handler once on load
    handleScroll();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
