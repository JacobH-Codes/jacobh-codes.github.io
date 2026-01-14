const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const secTop = section.offsetTop;
        if(scrollY >= secTop - 80) {
            current = section.getAttribute("id");
        }
    });

    navLink.forEach(link => {
        link.removeAttribute("aria-current");
        if(link.getAttribute("href") === `#${current}`) {
            link.setAttribute("aria-current", "page");
        }
    });
});