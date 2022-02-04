const disbut = require("discord-buttons")
const Discord = require("discord.js")


exports.run = async (client, message, args) => {   if (message.author.bot) return;
  if (message.author.bot) return;
        message.channel.send(`Roller Yükleniyor...`).then(async msj => {
            const botPing = (msj.createdTimestamp - message.createdTimestamp);
            msj.delete();
        const btn2 = new disbut.MessageMenuOption()
            .setLabel('Duyuru Bildirimi')
            .setDescription(`Duyuru bildirimi rolü`)
            .setValue('2').setEmoji("869707733685927936")
        const btn = new disbut.MessageMenuOption()
            .setLabel('Oylama Bildirimi')
            .setDescription(`Oylama bildirimi rolü`)
            .setValue('3').setEmoji("869707733685927936")

        const menu = new disbut.MessageMenu()
        .addOptions(btn2, btn)
        .setMaxValues(1)
        .setMinValues(1)
        .setID("menu")

        const hakkında = new Discord.MessageEmbed()
            .setTitle('Bildirimler')
            .setDescription(`> Merhaba, Rollerini aşagıdaki menüden alabilirsin. :)`)
        const embed1 = new Discord.MessageEmbed()
            .setTitle('Duyuru bildirimi')
            .setDescription("Duyuru rolü verildi!\n Artık yapılan duyuruların bildirimini alacaksın.")
            .setTimestamp()
            .setFooter(`Covid-19`)
        const embed = new Discord.MessageEmbed()
            .setTitle('Oylama bildirimi')
            .setDescription("Oylama rolü verildi!\n Artık yapılan oylamaların bildirimini alacaksın.")
            .setTimestamp()
            .setFooter(`Covid-19`)
           
        let msg = await message.channel.send({ embed: hakkında, component: menu })

        let verilecek = "871357288563224576"
        let verilecek2 = "871357462786224139"
        
        //user filter (author only)
        const collector = message.createMenuCollector({ time: 120000 });
        client.on("clickMenu", menu => {
            menu.reply.defer();
            if (menu.values[0] === '2'){
                menu.clicker.member.roles.add(verilecek)
                msg.edit({
                    embed: embed1,
                })
            }
           
            
            if (menu.values[0] === '3'){
                menu.clicker.member.roles.add(verilecek2)
                msg.edit({
                    embed: embed,
                })
            }
        })
        })
} 

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: []
}
exports.help = {
    name: "rol",
    description: "Gelişmiş Yardım",
    usage: "<prefix>yardım",
}