const Discord = require('discord.js');
const db = require('nrc.db');


exports.run = async(client, message, args) => {

  if (message.author.id !== "702912498650579036") return message.channel.send(` Bu komudu kullanabilmek için sahibim olman gerek. Fakat sen sahibim değilsin? Hadi git bakem. Yandan yandan gidinız...`)
  if (!args[0]) return message.channel.send(`:no_entry: Doğru Kullanmadınız. \`(prefix)sahip-selam aç\` | veya \`(prefix)sahip-selam kapat\` Yazman Gerek`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:no_entry: Doğru Kullanmadınız. \`(prefix)sahip-selam aç\` | veya \`(prefix)sahip-selam kapat\` Yazman Gerek`)

    if (args[0] == 'aç') {
    db.set(`sahipmesaj_${message.guild.id}`, 'acik')
    let i = await db.get(`sahipmesaj_${message.guild.id}`)
  message.channel.send(`Artık Botun Sahibi Bir Mesaj Yazınca Anına Karşılık Vereceğim.`)   
    
  }

  if (args[0] == 'kapat') {
      
    db.delete(`sahipmesaj_${message.guild.id}`)
    
    message.channel.send(`Artık Botun Sahibi Bir Mesaj Yazınca Anına Karşılık Vermeyeceğim.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['sahipselam'],
 permLevel: 0
};

exports.help = {
 name: 'sahip-selam',
 description: 'Narcos Code - Sahip Selam Kodu',
 usage: 'sahip-selam aç/kapat'
};