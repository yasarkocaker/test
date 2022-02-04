const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');
let ayarlar = require("../ayarlar.json")
let prefix = ayarlar.prefix;

exports.run = async (client, message, args, member) => {
    let onay = "\<a:yesbaby:848046823536066610>"
    let red = "\<a:nobaby:848046847372165130>"
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let kufurfiltre = await db.fetch(`kufur_${message.guild.id}`)
  let kufurYazi;
  if (kufurfiltre == null) kufurYazi = red + `ayarlanmadı`
  if (kufurfiltre == 'acik') kufurYazi = onay + 'ayarlandı '
  if (kufurfiltre == 'kapali') kufurYazi = red + `ayarlanmadı`
  //
    
   let reklamfiltre = await db.fetch(`reklam_${message.guild.id}`)
  let reklamYazi;
  if (reklamfiltre == null) reklamYazi = red + `ayarlanmadı`
  if (reklamfiltre == 'acik') reklamYazi = onay + `ayarlandı`
  if (reklamfiltre == 'kapali') reklamYazi = red + `ayarlanmadı`
  //

  let modKanal = await db.fetch(`codeminglog_${message.guild.id}`);
  let modKanalyazi;
  if (modKanal == null) modKanalyazi = red +`ayarlanmadı`
  else modKanalyazi = onay + `kanal ayarlandı #${modKanal} `
  //


  let kelimeKanal = await db.fetch(`kelime_${message.guild.id}`);
  let kelimekanalmain = message.guild.channels.cache.get(kelimeKanal)
  if (!kelimekanalmain) {
      kelimeKanal = red + "Ayarlanmadı"
  } else {
      kelimeKanal = onay + `#${kelimekanalmain.name}`
  }
  //////////////////////////
  let adamasmacaKanal = await db.fetch(`adamasmaca_${message.guild.id}`);
  let adamasmacakanalmain = message.guild.channels.cache.get(adamasmacaKanal)
  if (!adamasmacakanalmain) {
      adamasmacaKanal = red + "Ayarlanmadı"
  } else {
      adamasmacaKanal = onay + `#${adamasmacakanalmain.name}`
  }
  //////////////////////////////
  let sosKanal = await db.fetch(`sos_${message.guild.id}`);
  let soskanalmain = message.guild.channels.cache.get(sosKanal)
  if (!soskanalmain) {
    sosKanal = red + "Ayarlanmadı"
  } else {
      sosKanal = onay + `#${soskanalmain.name}`
  }
  ///////////////////////////
  let snakekanal = await db.fetch(`yılan_${message.guild.id}`);
  let snakekanalmain = message.guild.channels.cache.get(snakekanal)
  if (!snakekanalmain) {
    snakekanal = red + "Ayarlanmadı"
  } else {
    snakekanal = onay + `#${snakekanalmain.name}`
  }
  //////////////////////////////////
  let onerikanal = await db.fetch(`oneri_${message.guild.id}`);
  let onerikanalmain = message.guild.channels.cache.get(onerikanal)
  if (!onerikanalmain) {
    onerikanal = red + "Ayarlanmadı"
  } else {
    onerikanal = onay + `#${onerikanalmain.name}`
  }
  //////////////////////////////////
  let girisKanal = await db.fetch(`giris_${message.guild.id}`);
  let girisKanalmain = message.guild.channels.cache.get(girisKanal)
  if (!girisKanalmain) {
    girisKanal = red + "Ayarlanmadı"
  } else {
    girisKanal = onay + `#${girisKanalmain.name}`
  }
  //////////////////////////////////
  let cikisKanal = await db.fetch(`cikis_${message.guild.id}`);
  let cikisKanalmain = message.guild.channels.cache.get(cikisKanal)
  if (!cikisKanalmain) {
    cikisKanal = red + "Ayarlanmadı"
  } else {
    cikisKanal = onay + `#${cikisKanalmain.name}`
  }

  const ayarlar = new Discord.MessageEmbed()
      .setColor(0xFF7C00)
  .setTitle(`${message.guild.name} Adlı Sunucunun Ayarları`)
  .addField("Mod log kanalı", `${modKanalyazi}`, true)
  .addField("Kelime kanalı", `${kelimeKanal}`, true)
  .addField("Adamasmaca kanalı", `${adamasmacaKanal}`, true)
  .addField("Snake Kanal", `${snakekanal}`, true)
  .addField("XOX Kanal", `${sosKanal}`, true)
  .addField("Öneri Kanalı", `${onerikanal}`, true)
  .addField("Giris Kanal", `${girisKanal}`, true)
  .addField("Çıkış Kanal", `${cikisKanal}`, true)
  .addField("Küfür engelleme", `${kufurYazi}`, true)
  .addField("Reklam engelleme", `${reklamYazi}`, true)
  .setFooter(`${client.user.username}`, client.user.avatarURL())
  .setThumbnail(message.guild.iconURL())
      message.channel.send(ayarlar)
};
	
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'ayarlar',
  permLevel: 0
 };
 
 exports.help = {
 name: 'ayarlar',
 description: 'Bot İçin Sunucuyu Ayarlarını Gösterir.',
 usage: 'ayarlar'
 }