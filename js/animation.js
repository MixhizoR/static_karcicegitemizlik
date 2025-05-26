document.addEventListener('DOMContentLoaded', function() {
    // Social logo hover effects
    const socialLogos = document.querySelectorAll('.social-logo');
    socialLogos.forEach((logo) => {
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.5)';
        });
        logo.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Animation observer for elements with .hidden class
    const hiddenElements = document.querySelectorAll('.hidden');
    const serviceCards = document.querySelectorAll('.hizmet-card');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the animation type from data-animation attribute
                const animationType = entry.target.dataset.animation;
                
                // Remove the hidden class to make element visible
                entry.target.classList.remove('hidden');
                
                // Add the animation class if it exists
                if (animationType) {
                    entry.target.classList.add(animationType);
                }
                
                // Stop observing this element after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust this to start animation a bit before element is in view
    });

    // Observe all hidden elements
    hiddenElements.forEach(element => {
        observer.observe(element);
    });

    // Add staggered delay to service cards
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Star rating functionality
    document.querySelectorAll('.star-rating input').forEach((star) => {
        star.addEventListener('change', function() {
            const ratingInput = document.getElementById('rating-input');
            if (ratingInput) {
                ratingInput.value = this.value; // Update hidden input for backend
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize carousels
    var carousels = document.querySelectorAll(".carousel");
    carousels.forEach(function (carousel) {
      new bootstrap.Carousel(carousel, {
        interval: 5000,
        touch: true,
      });
    });
  });