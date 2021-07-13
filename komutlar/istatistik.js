const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter("Narcos  'Buyur benim istatistiklerim", bot.user.avatarURL())
    .addField("» **Botun Sahibi**", "<@!702912498650579036> | Rhinkaa#6666")
    .addField("»  **Geliştirici** ", "<@!702912498650579036> ")
    .addField("» **Çalışma süresi**", seksizaman)
    .addField(
      "» **Kullanıcılar**",
      bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
      true
    )
    .addField("» **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
    .addField("» **Kanallar**", bot.channels.cache.size.toLocaleString(), true)
    .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("» **Node.JS sürüm**", `${process.version}`, true)
    .addField("» **Ping**", bot.ws.ping + " ms", true)
    .addField(
      "**» Bot Davet**",
      " [Davet Et](https://discord.com/oauth2/authorize?client_id=645226005144797184&scope=bot&permissions=805314622)"
    )
    .addField(
      "**» Rhinkaa Squad**",
      " [Sunucumuza Katıl](https://discord.gg/hMr3emBWEM)"
    )
    .addField("**» Voteleme sayfası**", " [TIKLA](https://top.gg/bot/645226005144797184)")
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL()
    );
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "botbilgi"]
}

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};