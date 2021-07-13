const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const  db  = require('nrc.db')


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);




///////////////sahip 






client.on('message', async msg => {
	let i = await db.get(`sahipmesaj_${msg.guild.id}`)
	if (i == 'acik') {
	if (msg.author.id == "702912498650579036") {
	msg.channel.send("***Sahibim Sohbete Katıldı, Herkes Selam Versin!***")
  }};
  if (!i) return;

//--------------------------------------------------------------------------------------\\

//--------------------------------------------------------------------------------------\\

client.on("ready", () => {
    client.channels.cache.get("862997104879992832").join()
    })
    
    //--------------------------------------------------------------------------------------\\
      
    client.on("message", async msg => {
        if (msg.content.toLowerCase() === 'profesör') {
          msg.reply('yağız maltepe amk');
        }
      })

      client.on('guildMemberAdd', async (member, guild, message) => {
 
        let role = db.fetch(`otorolisim_${member.guild.id}`)
         let otorol = db.fetch(`autoRole_${member.guild.id}`)
         let i = db.fetch(`otorolKanal_${member.guild.id}`)
         if (!otorol || otorol.toLowerCase() === 'yok') return;
        else {
         try {
         
         
          if (!i) return
        if (!role) {
          member.addRole(member.guild.roles.get(otorol))
                                var embed = new Discord.RichEmbed()
                                .setDescription("**Sunucuya Yeni Katılan** @" + member.user.tag + " **Kullanıcısına** <@&" + otorol + ">  **Rolü verildi.**")
                                .setColor('0x36393E')
                                .setFooter(`Otorol Sistemi`)
             member.guild.channels.get(i).send(embed)
        } else if (role) {
            member.addRole(member.guild.roles.get(otorol))
                                var embed = new Discord.RichEmbed()
                                .setDescription(`**Sunucuya Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi.**`)
                                .setColor('0x36393E')
                                .setFooter(`Otorol Sistemi`)
             member.guild.channels.get(i).send(embed)
         
        }
         
         } catch (e) {
         console.log(e)
        }
        }
         
        });







    
    
   
});