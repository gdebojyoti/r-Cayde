const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('Nzg0NTAwNTA0MTYzNTE2NDM2.X8qNBw.70LfQIuIUkTRKE-YeWYLndrkMZc');

client.on('message', message => {
  console.log("msg", message.content);
  
  if (message.content === 'ping') {
    message.channel.send('Pong!')
  }
});