const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
const db = require("quick.db")
let prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  
    let okanal = message.mentions.channels.first()
    let embed = new Discord.MessageEmbed()
    .setDescription("lütfen Sos oyununun oynanacağı kanalı belirtiniz!")
    if (!okanal) return message.channel.send(embed)
 
    
    db.set(`sos_${message.guild.id}`,okanal.id)
    let aboembed = new Discord.MessageEmbed()
    .setDescription("Sos kanalı ayarlandı")
    message.channel.send(aboembed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
  usage:prefix + 'event'
};

exports.help = {
  name: 'soskanal',
  description: 'api',
};