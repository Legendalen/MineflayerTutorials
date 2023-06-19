const mineflayer = require('mineflayer');

const botArgs = {
    ip: 'WSupraBoxPvp.aternos.me',
    port: '25727',
    username: "TürkBot",
    version: '1.19'
};

// Setup bot connection
let bot = mineflayer.createBot(botArgs);

bot.on('login', () => {
    let botSocket = bot._client.socket;
    console.log(`Logged in to ${botSocket.server ? botSocket.server : botSocket._host}`);
});

bot.on('end', () => {
    console.log(`Disconnected`);
});
