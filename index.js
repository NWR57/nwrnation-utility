const Discord = require('discord.js')
const client = new Discord.Client({intents : 26737})

client.on("ready", () => {
  console.log('OK')
})

client.login(process.env.token)