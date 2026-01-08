console.log("Iniciando servidor...");

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor PureMind funcionando correctamente");
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ reply: "Mensaje vacío." });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Eres un asistente virtual de apoyo emocional. " +
              "No diagnosticas ni sustituyes a un profesional."
          },
          {
            role: "user",
            content: userMessage
          }
        ]
      })
    });

    const data = await response.json();

    if (!data.choices || data.choices.length === 0) {
      return res.status(500).json({
        reply: "No se obtuvo respuesta del asistente."
      });
    }

    res.json({
      reply: data.choices[0].message.content
    });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({
      reply: "Error al conectar con el asistente."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`);
});
