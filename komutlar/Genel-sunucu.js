const Discord = require("discord.js");
const fetch = require("node-fetch");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {

    const API = await fetch(` https://mcapi.xdefcon.com/server/mc.skyblock.tc/full/json`) 
    const Data = await API.json();
         const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("SkyblockTC")
            .addField(`Sunucu IP Adresi`, "play.skyblock.tc")
            .addField(`Ping`, Data.ping, true)
            .addField(`Oyuncu Sayısı`, `${Data.players}`, true)
            .addField(`Versiyon`, "1.16.X", true)
            .setImage(`http://status.mclive.eu/SkyblockTC/play.skyblock.tc/25565/banner.png`)
            .setFooter("SkyblockTC tarafından yapıldı.");
        message.channel.send(embed)
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["storika"],
    permLevel: 0,
    usage: prefix + 'storika'
};
exports.help = {
    name: 'server',
};