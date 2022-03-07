const Discord = require('discord.js')
const client = new Discord.Client({intents : 26737})
const keepAlive = require('./content/server')
keepAlive()
client.on("ready", () => {
  console.log('OK')
})

client.login(process.env.token)