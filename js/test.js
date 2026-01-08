document.getElementById("testForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const calcular = (clase) => {
        let total = 0;
        document.querySelectorAll("." + clase).forEach(el => {
            total += parseInt(el.value);
        });
        return total;
    };

    const emocion = calcular("emocion");
    const estres = calcular("estres");
    const sueno = calcular("sueno");
    const apoyo = calcular("apoyo");

    let resultado = "<h3>🧠 Resultados de tu evaluación emocional</h3>";

    // Estado emocional
    if (emocion <= 5) {
        resultado += "<p><strong>Estado emocional:</strong> Bajo. Podrías estar atravesando un momento de desánimo o apatía prolongada.</p>";
    } else if (emocion <= 7) {
        resultado += "<p><strong>Estado emocional:</strong> Variable. Alternas momentos buenos con otros más difíciles.</p>";
    } else {
        resultado += "<p><strong>Estado emocional:</strong> Positivo. Mantienes una base emocional bastante estable.</p>";
    }

    // Estrés
    if (estres >= 8) {
        resultado += "<p><strong>Estrés:</strong> Elevado. Es posible que estés acumulando demasiada presión.</p>";
    } else {
        resultado += "<p><strong>Estrés:</strong> Moderado o bajo. Tu nivel de estrés parece manejable.</p>";
    }

    // Sueño
    if (sueno <= 3) {
        resultado += "<p><strong>Sueño:</strong> Insuficiente. El descanso podría estar afectando a tu bienestar emocional.</p>";
    } else {
        resultado += "<p><strong>Sueño:</strong> Adecuado. Dormir bien es un punto fuerte para ti.</p>";
    }

    // Apoyo
    if (apoyo <= 3) {
        resultado += "<p><strong>Apoyo emocional:</strong> Limitado. Puede ser útil reforzar tu red de apoyo o pedir ayuda.</p>";
    } else {
        resultado += "<p><strong>Apoyo emocional:</strong> Sólido. Contar con otras personas es un factor protector importante.</p>";
    }

    resultado += `
      <hr>
      <h4>🔎 Recomendaciones generales</h4>
      <ul>
        <li>Establece pequeñas rutinas de autocuidado diarias.</li>
        <li>Escucha tus emociones sin juzgarlas.</li>
        <li>Si los síntomas se mantienen, considera hablar con un profesional.</li>
      </ul>
      <p><em>Este test no sustituye una evaluación clínica profesional.</em></p>
    `;

    document.getElementById("resultadoTest").innerHTML = resultado;
});
