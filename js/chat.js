async function enviarMensaje() {
    const input = document.getElementById("mensaje");
    const chatBox = document.getElementById("chatBox");
    const mensaje = input.value.trim();

    if (!mensaje) return;

    chatBox.innerHTML += `<p><strong>Tú:</strong> ${mensaje}</p>`;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: mensaje })
        });

        const data = await response.json();
        chatBox.innerHTML += `<p><strong>Asistente:</strong> ${data.reply}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {
        chatBox.innerHTML += `<p><strong>Error:</strong> No se pudo conectar con el servidor.</p>`;
    }
}