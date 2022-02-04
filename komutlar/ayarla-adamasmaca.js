const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
const db = require("quick.db")
let prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  
    let akanal = message.mentions.channels.first()
    let embed = new Discord.MessageEmbed()
    .setDescription("Adamasmaca oyununun oynanacağı kanalı belirt")
    .setColor("#00d0d0")
    if (!akanal) return message.channel.send(embed)
 
    
    db.set(`adamasmaca_${message.guild.id}`,akanal.id)
    let aboembed = new Discord.MessageEmbed()
    .setDescription("Adamasmaca kanalı ayarlandı")
    .setColor("#00d0d0")
    message.channel.send(aboembed)
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
  usage:prefix + 'adamasmacakanal'
};

exports.help = {
  name: 'adamasmacakanal',
  description: 'api',
};