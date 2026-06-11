const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Rolagem suave para os links do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute('href')
        );

        destino.scrollIntoView({
            behavior: 'smooth'
        });

        menu.classList.remove('active');
    });
});