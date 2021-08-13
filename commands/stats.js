const Discord = require('discord.js');
const chalk = require('chalk');


exports.execute = (client, message, args) => {
     message.delete().catch(O_o=>{}); 

var msg = `commandes:     **${client.commands.length}**`;
    msg += `\nserveurs:            **${client.guilds.array().length}**`;
    msg += `\nsalons:                **${client.channels.array().length}**`;
    msg += `\nemojis:                **${client.emojis.array().length}**`;
    msg += `\nping:                    **${client.ping.toFixed(0)}ms**`;
    msg += `\nuptime:               **${~~(client.uptime/1000)}s**`;   // TODO fix format

    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField("Stats", msg);

    message.channel.send(embed);
  
  console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` STATS `))+ ']\n--------------------------------------')

};

exports.info = {
    name: "stats",
    alias: ['info'],
    permission: "default",
    type: "general"
};
