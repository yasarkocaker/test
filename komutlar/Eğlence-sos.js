const TicTacToe = require('discord-tictactoe');
const Discord = require('discord.js');
const db = require("quick.db")
const client = new Discord.Client();
const game = new TicTacToe({ language: 'tr' })
 
exports.run = async (client ,message, args) =>{
  let soskanal = db.get(`sos_${message.guild.id}`)
    if(message.author.bot) return;
    if(message.channel.id !== soskanal) return;

  game.handleMessage(message);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['xox'],
    permLevel: 0
}

exports.help = {
    name: 'tictactoe',
    description: 'XOX oyunu.',
    usage: 'xox'
}