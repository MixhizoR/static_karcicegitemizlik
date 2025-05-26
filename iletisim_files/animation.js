document.addEventListener('DOMContentLoaded', function() {
        const socialLogos = document.querySelectorAll('.social-logo');
        socialLogos.forEach((logo) => {
            logo.addEventListener('mouseover', function() {
                this.style.transform = 'scale(1.5)';
            });
            logo.addEventListener('mouseout', function() {
                this.style.transform = 'scale(1)';
            });
       });
    });



    /*animasyonlar*/
// Animasyonları tetikleyen JavaScript kodu
document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const animationType = entry.target.dataset.animation;
                entry.target.classList.add(animationType);
                entry.target.classList.remove("hidden");
                observer.unobserve(entry.target); // Animasyon bir kez tetiklendikten sonra durdur
            }
        });
    }, {
        threshold: 0.7, // Elemanın %50'si göründüğünde tetikle
    });

    hiddenElements.forEach((el) => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".hizmet-card");

    const observerOptions = {
        root: null, // Viewport'u gözlemle
        rootMargin: "0px",
        threshold: 0.1, // Kartın %10'u göründüğünde tetikle
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Kart görünür olduğunda animasyonu başlat
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 200); // Her kart için 200ms gecikme ekle
                observer.unobserve(entry.target); // Kart bir kez göründükten sonra gözlemi durdur
            }
        });
    }, observerOptions);

    // Her bir kartı gözlemle
    cards.forEach((card) => {
        observer.observe(card);
    });
});


document.querySelectorAll('.star-rating input').forEach((star) => {
    star.addEventListener('change', function () {
        document.getElementById("rating-input").value = this.value; // Update hidden input for backend
    });
});

