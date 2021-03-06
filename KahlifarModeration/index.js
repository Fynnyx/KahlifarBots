const { Client, Intents, Collection } = require("discord.js")
const dotenv = require("dotenv")

dotenv.config()

const client = new Client({
	partials: ["MESSAGE", "CHANNEL", "REACTION"],
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_MEMBERS",
		"GUILD_PRESENCES",
		"DIRECT_MESSAGES",
		"GUILD_INVITES",
	]
});
module.exports = client;

client.slashCommands = new Collection();
["events", "commands"].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});


client.login(process.env.TOKEN)
