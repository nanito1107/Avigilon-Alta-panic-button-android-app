
document.getElementById('panicButton').addEventListener('click', function() {
    // Crear objeto de datos para enviar en el webhook
    const data = {
        message: '¡Emergencia! ¡Botón de Pánico activado!'
    };

    // Realizar solicitud HTTP POST al URL del webhook
    fetch('https://webhook-test.com/fe50a5f234ff9a1237873d58f60ea85a', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
			"Access-Control-Allow-Origin", "your-app-origin",
			"Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
        },
        body: JSON.stringify(data)


    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al enviar el webhook');
        }
        return response.json();
    })
    .then(data => {
        console.log('Webhook enviado exitosamente:', data);
    })
    .catch(error => {
        console.error('Error al enviar el webhook:', error);
    });
});
