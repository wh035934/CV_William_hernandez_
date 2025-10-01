const toggleDarkModeBtn = document.getElementById('toggleDarkMode');

toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Guarda preferencia en localStorage
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Al cargar, aplica preferencia
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}