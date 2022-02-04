const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
const db = require("quick.db")
let prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  
    let ykanal = message.mentions.channels.first()
    let embed = new Discord.MessageEmbed()
    .setDescription("lütfen Yılan oyununun oynanacağı kanalı belirtiniz!")
    if (!ykanal) return message.channel.send(embed)
 
    
    db.set(`yılan_${message.guild.id}`,ykanal.id)
    let aboembed = new Discord.MessageEmbed()
    .setDescription("Yılan oyunu kanalı ayarlandı")
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
  name: 'snakekanal',
  description: 'api',
};