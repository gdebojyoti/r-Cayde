require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
  console.log("msg", message.content);
  
  if (message.content === 'ping') {
    message.reply('Pong!')
    // message.channel.send('Pong!')
  }
});
