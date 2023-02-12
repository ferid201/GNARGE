const discord = require('discord.js')
exports.run = function(client, message, args,params) {

  if (args.length < 1) {
    return message.reply('Doğru Kullanım -tersyazı merhaba')
  }
   
message.channel.send(args.join(' ').split('').reverse().join(''))
};

exports.conf = {
  aliases: [ 'ters' ],
  enabled: true,
  guildOnly: false,
  permLevel: 0,
   kategori: "Eğlence"
};

exports.help = {
  name: 'tersyazı',
  description: 'Gönderdiğiniz mesajın ters çevrilmiş halini yazar.',
  category: 'Kullanıcı',
  usage: 'tersyaz yazı',
};