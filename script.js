document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector(".navegacao");
    const elementos = document.querySelectorAll('.card, .cardimg');
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".navegacao a");

    // ===== SCROLL SUAVE =====
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const id = this.getAttribute('href');

            if (id.startsWith("#")) {
                e.preventDefault();
                document.querySelector(id)?.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    function animar() {

        // NAVBAR
        if (window.scrollY > 50) {
            nav.style.background = "rgba(15, 23, 42, 0.95)";
            nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.6)";
        } else {
            nav.style.background = "rgba(15, 23, 42, 0.8)";
            nav.style.boxShadow = "none";
        }

        // CARDS
        elementos.forEach(el => {
            const pos = el.getBoundingClientRect().top;

            if (pos < window.innerHeight - 50) {
                el.classList.add("show");
            }
        });

        // MENU ATIVO
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        links.forEach(a => {
            a.classList.remove("active");
            if (a.getAttribute("href") === "#" + current) {
                a.classList.add("active");
            }
        });
    }

    // roda ao carregar
    animar();

    // roda no scroll
    window.addEventListener("scroll", animar);

});