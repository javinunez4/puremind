const navUsuario = document.getElementById("navUsuario");
const btnInicio = document.getElementById("btnInicio");

const loggedIn = sessionStorage.getItem("loggedIn") === "true";
const userType = sessionStorage.getItem("userType");

let perfilURL = "login.html";

if (loggedIn) {
    if (userType === "usuario") {
        perfilURL = "usuario.html";
    }

    if (userType === "profesional") {
        perfilURL = "profesionales2.html";
    }

    if (navUsuario) {
        navUsuario.textContent = "MI PERFIL";
        navUsuario.href = perfilURL;
    }

    if (btnInicio) {
        btnInicio.textContent = "MI PERFIL";
        btnInicio.href = perfilURL;
    }
}

if (navUsuario) {
    navUsuario.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = perfilURL;
    });
}
