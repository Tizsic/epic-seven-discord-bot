// Require necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require ('discord.js');
const { token } = require ('./config.json');

// Creates a new client instance

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Login to Discord with your client's token
client.login(token);