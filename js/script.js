// Функция для показа сайдбара
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

// Функция для скрытия сайдбара
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Добавляем обработчики событий после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все ссылки внутри сайдбара
    const sidebarLinks = document.querySelectorAll('.sidebar li a');
    
    // Добавляем обработчик клика для каждой ссылки
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Закрываем сайдбар при клике на ссылку
            hideSidebar();
        });
    });

    // Закрытие сайдбара при клике вне его области
    document.addEventListener('click', function(event) {
        const sidebar = document.querySelector('.sidebar');
        
        // Проверяем, открыт ли сайдбар
        if (sidebar.style.display === 'flex') {
            // Если клик был не по сайдбару и не по кнопке меню
            if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
                hideSidebar();
            }
        }
    });
});



window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    
    if (window.scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.5 });

document.querySelectorAll('.home nav, .home .main-text h1,.home .main .main-text p, .home .main .main-text .button a, .things .box-container .box, .conviniences .main-text, .houses .main-text, .services .main-text, .contacts .main-text, .conviniences .box-container .box, .houses .box-container .box, .services .box-container .box, .contacts .contact, .footer ')
  .forEach(el => observer.observe(el));