// Função para rolagem suave ao clicar no botão
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Função para animação de fade-in nos elementos
function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            el.classList.add('show');
        }
    });
}
window.addEventListener('scroll', fadeInElements);
window.addEventListener('load', fadeInElements);

// Validação e mensagem de sucesso do formulário
document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }
    alert("Obrigado por se inscrever! Em breve, enviaremos o acesso ao seu e-mail.");
    this.reset();
});
