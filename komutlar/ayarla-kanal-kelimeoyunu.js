const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
const db = require("quick.db")
let prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  
    let kanal = message.mentions.channels.first()
    let embed = new Discord.MessageEmbed()
    .setDescription("Lütfen kelime oyununun oynanacağı kanalı belirtiniz!")
    if (!kanal) return message.channel.send(embed)
 
    
    db.set(`kelime_${message.guild.id}`,kanal.id)
    let aboembed = new Discord.MessageEmbed()
    .setDescription("Kelime oyunu kanalı ayarlandı")
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
  name: 'kelimekanal',
  description: 'api',
};