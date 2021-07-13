const Discord = require('discord.js');
const db = require("nrc.db")
exports.run = async (client, message, args) => {
     
    const embed = new Discord.MessageEmbed()
    .setColor('#DARKBLUE')
    .setDescription(`
    Ping Değerleri;

**Botun Gecikmesi :** \`${Math.floor(Math.round(Number(client.ws.ping)))}\`
**Mesaj Gecikmesi :** \`${Math.floor(Math.round(Number(Date.now() - message.createdTimestamp)))}\`
`)
    message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["gecikme"],
  permLevel: 0
};

exports.help = {
  name: 'ping', 
  description: '',
  usage: ''
};