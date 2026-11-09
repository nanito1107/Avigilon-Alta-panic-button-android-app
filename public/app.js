document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('output');
    const webhookImage = document.getElementById('webhook-image');

    // Función para recibir datos del webhook desde el servidor
    const fetchWebhookData = async () => {
        try {
            const response = await fetch('/webhook-data');
            const webhookData = await response.json();

            if (webhookData.data) {
                webhookImage.src = `data:image/png;base64,${webhookData.data}`;
                outputDiv.textContent = `Imagen recibida del webhook:\n\nTimestamp: ${webhookData.timestamp}`;
            } else {
                outputDiv.textContent = 'Error al recibir los datos del webhook.';
            }
        } catch (error) {
            console.error('Error al recibir los datos del webhook:', error);
            outputDiv.textContent = 'Error al recibir los datos del webhook.';
        }
    };

    // Llamar a la función para recibir los datos del webhook al cargar la página
    fetchWebhookData();
});
