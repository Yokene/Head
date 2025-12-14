document.addEventListener("DOMContentLoaded", function() {
    // Функция для последовательной анимации
    function animateCards(selector, delay = 0.2) {
        const cards = document.querySelectorAll(selector);

        cards.forEach((card, index) => {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        card.style.transitionDelay = `${index * delay}s`;
                        card.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            observer.observe(card);
        });
    }

    // Анимируем карточки товаров
    animateCards('.card', 0.1);

    // Анимируем карточки технологии
    animateCards('.tech-card', 0.1);
});
