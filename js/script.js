function showSidebar() {
    document.querySelector('.sidebar').style.display = 'flex';
}

function hideSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sidebar li a').forEach(link => {
        link.addEventListener('click', hideSidebar);
    });

    document.addEventListener('click', function(event) {
        const sidebar = document.querySelector('.sidebar');
        const menuBtn = document.querySelector('.navbar li:last-child');
        if (sidebar.style.display === 'flex') {
            if (!sidebar.contains(event.target) && (!menuBtn || !menuBtn.contains(event.target))) {
                hideSidebar();
            }
        }
    });

    document.querySelector('nav').classList.add('visible');
document.querySelectorAll('.things .box').forEach(el => {
    el.classList.add('visible');
});

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0 });

    document.querySelectorAll('.home .main-text h1, .home .main .main-text p, .home .main .main-text .button a, .conviniences .main-text, .houses .main-text, .services .main-text, .contacts .main-text, .conviniences .box-container .box, .houses .box-container .box, .services .box-container .box, .contacts .contact, .footer, .things-the-second .box-container-the-second, .things-the-second .box-the-second')
        .forEach(el => observer.observe(el));
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
