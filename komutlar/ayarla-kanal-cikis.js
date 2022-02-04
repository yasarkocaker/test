const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
const db = require("quick.db")
let prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  
    let akanal = message.mentions.channels.first()
    let embed = new Discord.MessageEmbed()
    .setDescription("Çıkış kanalını belirt!")
    .setColor("#00d0d0")
    if (!akanal) return message.channel
 
    
    db.set(`cikis_${message.guild.id}`,akanal.id)
    let aboembed = new Discord.MessageEmbed()
    .setDescription("Çıkış kanalı ayarlandı")
    .setColor("#00d0d0")
    message.channel.send(aboembed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
  usage:prefix + "cikiskanal"
};

exports.help = {
  name: 'cikiskanal',
  description: 'api',
};