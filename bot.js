const embed = require('discord.js');

const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = 'tgf!'



client.on("ready", () => {client.user.setGame('Hatıra Kalması İçin | Güncelleme Olmayacak | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/TheGodFather')

});

  

client.login(process.env.BOT_TOKEN)
