const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Crear cliente con autenticación local
const client = new Client({
    authStrategy: new LocalAuth()  // Esta línea guarda la sesión automáticamente
});

client.on('qr', qr => {
    console.log('Escanea este código QR en WhatsApp Web:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Cliente de WhatsApp está listo.');
});

client.on('message', async (message) => {
    console.log(`Mensaje recibido: ${message.body}`);
    await message.reply('¡Hola! Soy un bot de prueba 🤖');
});

client.initialize();