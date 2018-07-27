const embed = require('discord.js');

const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = 'tgf!'



client.on("ready", () => {client.user.setGame('tgf!yardım | Eski Sürümü Yükledim Aktif Olacak Ama Güncelleme Olmayacak | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/TheGodFather')

});

  

client.login(process.env.BOT_TOKEN)
