console.log("Iniciando servidor...");

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});

const OPENAI_API_KEY = "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";

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
        console.log("Respuesta OpenAI:", data);

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
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
