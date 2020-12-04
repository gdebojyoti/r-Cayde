const Discord = require('discord.js');
const { botToken } = require('./config');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(botToken);

client.on('message', message => {
  console.log("msg", message.content);
  
  if (message.content === 'ping') {
    message.reply('Pong!')
    // message.channel.send('Pong!')
  }
});
