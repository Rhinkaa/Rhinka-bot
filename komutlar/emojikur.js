const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  

  

  let messages = await msgg.channel.awaitMessages(
    m =>
      m.author.id == message.author.id &&
      ["evet", "hayır", "hayir", "Hayır", "HAYIR", "Evet"].some(cevap =>
        m.content.toLowerCase().includes(cevap)
      ),
    {
      max: 1,
      time: 15000
    }
  );

  if (messages.size <= 0) {
    return message.reply("Cevap vermediğin için iptal ettim");
  }

  let reply = messages.first();
  if (
    reply.content.toLocaleLowerCase().includes("evet") ||
    reply.content.toLocaleLowerCase().includes("Evet")
  ) {
    message.channel
      .send(
        new Discord.MessageEmbed()
          .setColor("GOLD")
          .setDescription(
            ":gear: **Botun sunucunuza Normal emojileri kurmasını onayladınız! Emojiler kuruluyor, bu işlem biraz zaman alabilir.**"
          )
      )
      .then(
        message.guild.emojis.create(
          "https://images-ext-1.discordapp.net/external/ohdDjBsM4Q_ZRROcUtOspGfr53JRoJuX3DSIrpcBED8/https/cdn.discordapp.com/emojis/836524013341114398.png",
          "pandakalp"
        ),
        message.guild.emojis.create(
          "https://images-ext-2.discordapp.net/external/zixMyIDNxLdCePThhmLaBUnxwtkwL5HW_xOUBqmoVqE/https/cdn.discordapp.com/emojis/836524014557855765.png",
          "what"
        ),
        message.guild.emojis.create(
          "https://images-ext-2.discordapp.net/external/VDy7BvzPUvsbfLmsnRNrsqbP814_cEUyrzmSn3PjtCQ/https/cdn.discordapp.com/emojis/836523998867226644.png",
          "think"
        ),
        message.guild.emojis.create(
          "https://images-ext-1.discordapp.net/external/nJsmeH2SxAGMGA_l5A2kOuCJlxrkUdvRQqF8fWFtvMw/https/cdn.discordapp.com/emojis/836524003711385672.png",
          "wowcry"
        ),
        message.guild.emojis.create(
          "https://images-ext-1.discordapp.net/external/JN9mDGyOAJS_2n2mILXh1ECLasnW3BZlebbPgrzXfIY/https/cdn.discordapp.com/emojis/836524002938847232.png",
          "sa"
        ),
message.guild.emojis.create(
          "https://images-ext-1.discordapp.net/external/3IpxES7DAeyWPxkyJP9oKvQ6Uko4OxyqmkiS60Rn4rQ/https/cdn.discordapp.com/emojis/836523999797182495.png",
          "smile"
        ),
        message.guild.emojis.create(
          "https://images-ext-1.discordapp.net/external/eUphZ1M0qfw8lz6yM1GKohgqTec-CMPejs6mfhA20T8/https/cdn.discordapp.com/emojis/836524008593293355.png",
          "ree"
        ),
        message.guild.emojis.create(
          "https://images-ext-2.discordapp.net/external/OiLWoPkYVyxAQb12tq_OQB5gqlTXZYEULdOxGnXqNOc/https/cdn.discordapp.com/emojis/836524004818550804.png",
          "pogey"
        ),
        message.guild.emojis.create(
          "https://images-ext-1.discordapp.net/external/a_-2m9UBedhsmBHBfOSOJwY9EjjNJlGPH-aShNt8ZhY/https/cdn.discordapp.com/emojis/836524010815750154.png",
          "ping"
        ),
        message.guild.emojis.create(
          "https://images-ext-1.discordapp.net/external/hLXWkaDLA4StF_ykCuhs_T5czuE2TnsKZVg1LHgUxZ8/https/cdn.discordapp.com/emojis/836524001865236520.png",
          "og"
        ),
        message.guild.emojis.create(
          "https://images-ext-2.discordapp.net/external/2Euj9v_7Hkou2mok3rnP80AcxnlPD4rbL9N7TJmA7wI/https/cdn.discordapp.com/emojis/836524006567968790.png",
          "kekw"
        ),
        message.guild.emojis.create(
          "https://images-ext-1.discordapp.net/external/prvJx8tmRBJP29CHEPVVgGtZ93eg-0vdzQuqsNW8ctk/https/cdn.discordapp.com/emojis/836524009926688796.png",
          "hg"
        ),
        message.guild.emojis.create(
          "https://images-ext-1.discordapp.net/external/58TXpySWzj0iEhfj3EjxWx1w9MQFoPdWzcpc13zbTac/https/cdn.discordapp.com/emojis/836524005665538078.png",
          "hb"
        ),
        message.guild.emojis.create(
          "https://images-ext-2.discordapp.net/external/g5G-YRZsSQC47CL_BU4hnfBbWgi2UDzbqd6Fgg_b88A/https/cdn.discordapp.com/emojis/836524007825604668.png",
          "hattip"
        ),
        message.guild.emojis.create(
          "https://images-ext-2.discordapp.net/external/x7NcCg8M8urDIvgo4czaCSZ-VpHMkGRshm2jZYzvEIA/https/cdn.discordapp.com/emojis/836523997985898546.png",
          "giggle"
        ),
        message.guild.emojis.create(
          "https://images-ext-2.discordapp.net/external/1VpT7sTqBHxELyU2HhvuImCgMZQP75PCTifsVWk1m88/https/cdn.discordapp.com/emojis/836524000858472538.png",
          "doge"
        ),
        message.guild.emojis.create(
          "https://images-ext-2.discordapp.net/external/HIKX7X5MNxkqG0bdEZ3y_0Wx9WWae8H-RabUcLYH_To/https/cdn.discordapp.com/emojis/836524015694118942.png",
          "babyoda"
        ),
        message.guild.emojis.create(
          "https://images-ext-2.discordapp.net/external/d5EO2EvUYUmfd79l6MKNw51sOZFg4hRspsTCqHo-XhI/https/cdn.discordapp.com/emojis/836523997067214898.png",
          "as"
        )
      );
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(
          ":white_check_mark:** Emojilerin kurulumu tamamlandı!**\n**Rhinkaa yeni sunucunuzda, iyi eğlenceler diler.**"
        )
    ); //Mesajı değiştirebilirsiniz
  } else message.reply("İşlemi iptal ettim.");

  /*
     } else {
        message.channel.send(new Discord.MessageEmbed() .setThumbnail(client.user.avatarURL()) .setDescription(`Bu komutu kullanabilmek için **Discord Bot List** üzerinden oy vermen gerekiyor.\n Eğer oy verdiyseniz birkaç dakika bekleyin.\n:ballot_box: [Oy Ver](https://top.gg/bot/${client.user.id}/vote)`) .setImage('https://images-ext-1.discordapp.net/external/E-8nkq6QS4Gp2jJUVcMkW-EMUc4SkvrIm2kKxjIzv2w/https/media.giphy.com/media/1iOxd2XIr6OjpHSa4K/giphy.gif') .setFooter('• Bota oy vererek, botun yaygınlaşmasına yardımcı olacaksın.'))
   
   }
 
 })
 */
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emojikur"],
  permLevel: 4 // Buraya Gereken Yetkiyi Yazın.
};

exports.help = {
  name: "emoji-kur"
};