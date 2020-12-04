function hey (message) {
  const { username: authorName } = message.author

  if (!message.guild) {
    // for DMs

    message.reply(`Hey there, ${authorName}! Thanks for sending me a DM.`)
  } else {
    // for messages within server (channels)

    const { name: serverName, memberCount: serverMemberCount, members } = message.guild
    const msg = generateChannelMsg (authorName, serverName, serverMemberCount)

    message.channel.send(msg)
    // message.author.send("The CC!")
  }
}

function generateChannelMsg (authorName, serverName, serverMemberCount) {
  return `
Hi there, ${authorName}! Here are a couple of "useful" pieces of info about this server:
Name: ${serverName}
Members: ${serverMemberCount}
  `
}


module.exports = hey