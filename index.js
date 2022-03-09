const Discord = require('discord.js')
const client = new Discord.Client({intents : 26737})
const keepAlive = require('./content/server')
keepAlive()
client.on("ready", () => {
  console.log('OK')
})

const { prefix, color, ownerId } = require("./content/utils/config.json");

client.pr_commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.settings = { prefix };

for(let handler of  ["pr_command", "event"]) require(`./handlers/${handler}`)(client);


client.login(process.env.token)