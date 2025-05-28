document.addEventListener("DOMContentLoaded", function () {
    const hero = document.getElementById('hero');
    
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateX(0)';
        } else {
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-50px)';
        }
      });
    }, { threshold: 0.3 });
    
    heroObserver.observe(hero);