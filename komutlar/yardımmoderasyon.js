const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      "**▬▬▬▬▬▬[** ©️ **» Rhinkaa Bot** ©️ **]▬▬▬▬▬▬**  **  **OWNER: `Rhinkaa#6666`"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1"
    )
    .setDescription(
      `
**▬▬▬▬▬▬▬[** :closed_lock_with_key:  **Komut Listesi**   :closed_lock_with_key: **]▬▬▬▬▬▬**
> **» -kanalıkilitle :** Kanalı belirtilen süre kilitlenir.
> **» -yetkilerim :** Sahip olduğun yetkileri gösterir.
> **» -sil :** Belirtilen sayıda mesaşı siler.
> **» -yavaş-mode :** Yavaş modun süresini ayarlar.
> **» -emojikur :** Emoji kurar.
> **» -kalın :** Banner yapar.
> **» -deprem :** Son 10 depremi gösterir.
> **» -corona :** Total corona verilerini gösterir.
**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**
> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/NMnPUjK)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: -yardım**
> :bulb: **Discord Js Sürümü: 12.4.0**
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/hMr3emBWEM)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=862347980161810432&scope=bot&permissions=805314622)** **•** **[Web-Site]( https://discord.gg/NMnPUjK)**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(EmbedNarcosCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-moderasyon"
};