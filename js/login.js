const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const usernameInput = document.getElementById("username");
        const username = usernameInput.value.trim();

        if (!username) {
            alert("Por favor, introduce tu nombre de usuario.");
            return;
        }

        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("userType", "usuario");
        sessionStorage.setItem("username", username);

        window.location.href = "usuario.html";
    });
}
