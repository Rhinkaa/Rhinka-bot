const covid = require('covidtracker');
const Discord = require('discord.js');
 exports.run = async(client, message, args) => {
   let ulke = args.slice(0).join(' ')
  let specificCountry = await covid.getCountry({country: ulke})
  if (!ulke) specificCountry = await covid.getAll();
  if (specificCountry.cases === undefined) return message.reply('Geçerli Bir Ülke Yazmalısın! Örnek: -corona Turkey');
  return message.channel.send(new Discord.MessageEmbed() .setColor('RANDOM') .setTitle(`${ulke} Ülkesinin Vaka, Ölüm Ve İyileşen Sayıları`) .addField(`Vaka Sayısı:`, specificCountry.cases) .addField('Ölüm Sayısı:', specificCountry.deaths) .addField('İyileşen Sayısı:', specificCountry.recovered))
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'corona'
};