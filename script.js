// Скрипт для слайдера проектов
document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.querySelector('.projects-container');
    const prevBtn = document.querySelector('.slider-nav--prev');
    const nextBtn = document.querySelector('.slider-nav--next');
    const projectCards = document.querySelectorAll('.project-card');
    const cardWidth = 350; // ширина карточки + отступы
    const gap = 30; // отступ между карточками
    let currentIndex = 0;

    // Инициализация слайдера
    function updateSliderPosition() {
        const translateX = -(currentIndex * (cardWidth + gap));
        projectsContainer.style.transform = `translateX(${translateX}px)`;
    }

    // Навигация
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < projectCards.length - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    // Форма заявки
    const contactForm = document.getElementById('contactForm');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modalClose');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Валидация формы (упрощенная)
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const consent = document.getElementById('consent').checked;

        if (!name || !phone || !consent) {
            alert('Пожалуйста, заполните все обязательные поля.');
            return;
        }

        // Здесь можно отправить данные на сервер (AJAX)
        // Для демонстрации просто показываем модальное окно
        showModal();
    });

    function showModal() {
        modal.style.display = 'flex';
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    modalClose.addEventListener('click', hideModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Закрытие модального окна по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideModal();
        }
    });

    // Кнопка "Оставить заявку" в шапке
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', function() {
        document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
    });
});