const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Servir archivos estáticos del directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Variable para almacenar los datos del webhook
let webhookData = null;

// Ruta para recibir el webhook
app.post('/webhook', (req, res) => {
    const base64Data = req.body.data;
    const timestamp = req.body.timestamp;

    webhookData = { data: base64Data, timestamp: timestamp };

    console.log('Datos del webhook recibidos');
    console.log('Timestamp:', timestamp);

    res.status(200).send('Webhook recibido exitosamente');
});

// Ruta para enviar los datos del webhook al frontend
app.get('/webhook-data', (req, res) => {
    if (webhookData) {
        res.json(webhookData);
    } else {
        res.status(404).send('No se encontraron datos del webhook');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
