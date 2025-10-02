const toggleDarkModeBtn = document.getElementById('toggleDarkMode');

toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnArriba");
    const seccion = document.getElementById("proyectos"); // Asegúrate que esta sección exista

    window.addEventListener("scroll", function () {
      if (window.scrollY > seccion.offsetTop) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });