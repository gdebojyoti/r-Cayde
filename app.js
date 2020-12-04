const Discord = require('discord.js')
const { botToken, prefix } = require('./config')
const commands = require('./commands')

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!')
})

client.login(botToken)

client.on('message', message => {
  console.log("msg", message.content)

  // ignore messages if they are not commands OR if they are from other bots
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()

  switch (command) {
    case 'hi':
    case 'hello':
    case 'hey':
    case 'hola': {
      commands.hola(message)
      break
    }
    case 'ping': {
      commands.ping(message)
      break
    }
    case 'test': {
      commands.test(message, args)
    }
  }
})
