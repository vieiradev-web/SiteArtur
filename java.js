document.querySelectorAll('.navegacao a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navegacao");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(15, 23, 42, 0.95)";
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.6)";
    } else {
        nav.style.background = "rgba(15, 23, 42, 0.8)";
        nav.style.boxShadow = "none";
    }
});

const elementos = document.querySelectorAll('.card, .cardimg');

window.addEventListener('scroll', () => {
    elementos.forEach(el => {
        const pos = el.getBoundingClientRect().top;

        if (pos < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".navegacao a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});

document.querySelector("form").addEventListener("submit", function(e) {
    const nome = document.querySelector("#nome").value;

    if (nome === "") {
        alert("Preencha o nome!");
        e.preventDefault();
    }
});