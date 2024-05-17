document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('language-toggle');
    const title = document.getElementById('page-title');

    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            title.textContent = 'Example here'; // Título em inglês
            document.documentElement.lang = "en"; // Define o atributo de linguagem da página para inglês
        } else {
            title.textContent = 'Exemplo aqui'; // Título em português
            document.documentElement.lang = "pt"; // Define o atributo de linguagem da página para português
        }
    });
});