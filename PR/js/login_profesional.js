document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const cvInput = document.getElementById("cv");
    const usernameInput = document.getElementById("username");

    if (!loginForm || !cvInput || !usernameInput) {
        console.error("Formulario, CV o usuario no encontrado");
        return;
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        if (cvInput.files.length === 0) {
            alert("Por favor, adjunta tu CV para continuar.");
            return;
        }

        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("userType", "profesional");
        sessionStorage.setItem("username", usernameInput.value);

        window.location.href = "profesionales2.html";
    });
});
