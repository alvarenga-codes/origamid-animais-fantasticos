export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowSectionVisible = sectionTop - windowMetade < 0;
      if (windowSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
