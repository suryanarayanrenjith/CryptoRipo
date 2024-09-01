document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const heroContent = document.querySelector('.hero-content');
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
    });

    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        roadmapItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    });
    
    setTimeout(() => {
        ctaButton.classList.add('animate');
    }, 500);
});
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const heroContent = document.querySelector('.hero-content');
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
    });

    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        roadmapItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    });
    
    setTimeout(() => {
        ctaButton.classList.add('animate');
    }, 500);
});
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const heroContent = document.querySelector('.hero-content');
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
    });

    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        roadmapItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    });
    
    setTimeout(() => {
        ctaButton.classList.add('animate');
    }, 500);
});
