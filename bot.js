const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require('./config.js');
const token = cfg.config.BOT_TOKEN;
const prefix = cfg.config.PREFIX;
const tool = require('./tool.js');
const chalk = require('chalk');
const fs = require('fs');

///////////////////////////////////////////////////////////////////////////////

client.config = {
    TOKEN: cfg.config.BOT_TOKEN,
    OWNER_ID: cfg.config.OWNER_ID,
    PREFIX: cfg.config.PREFIX
};

exports.config = () => {
    return client.config;
}


client.commands = [];
fs.readdir("./commands/", function(err, files){
    files.forEach(f => {
        const cmd = require(`./commands/${f}`);
        client.commands.push(cmd);
    });
});

///////////////////////////////////////////////////////////////////////////////

client.on("ready", () => {
  
 var memberCount = client.users.size;
 var servercount = client.guilds.size;
 var memberNumber = client.users.size;
 var serverNumber = client.guilds.size;
  
 var servers = client.guilds.array().map(g => g.name).join(',');

console.log("--------------------------------------");
console.log('--> ' + (chalk.yellow('Bot By L\'archimage')) +' \n--> ' + (chalk.green('Connecter avec succès  ')) + ' \n--> ' + (chalk.magenta('Name Bot:              '))+ `[ ${client.user.tag} ]` + ' \n--> ' + (chalk.magenta('Commands:              '))+ `[ ${client.commands.length} ]` + ' \n--> '+(chalk.magenta('Le préfix actuel:      ')) +  `[ ${prefix} ]`  + '\n--> '+ (chalk.magenta('Nombre d\'utilisateurs: ')) + `[ ${client.users.size} ]` + '\n--> '+ (chalk.magenta('Nombre salon:          ')) + `[ ${client.channels.size} ]` + '\n--> '+ (chalk.magenta('Nombre de serveurs:    ')) + `[ ${client.guilds.size} ]`);
console.log("--------------------------------------");
console.log('--> ' + (chalk.green('Prèt !')));
console.log('______________________________________');

client.user.setActivity(client.config.PREFIX + "help");
  
});

///////////////////////////////////////////////////////////////////////////////

client.on ("message", msg => {
	if (msg.author.client || msg.channel.type != 'text')
      return;
});

client.on ("message", async msg => {

    if(!msg.content.startsWith(client.config.PREFIX)) return;
    var args = msg.content.substring(client.config.PREFIX.length).split(" ");
    var cmdName = args[0].toLowerCase();

    client.commands.forEach(command => {
        if(cmdName === command.info.name || command.info.alias.includes(cmdName)){

            if(command.info.permission == "owner"
                    && msg.author.id != client.config.OWNER_ID){
                msg.channel.send("Commande réservée a l'**owner** du bot");
                msg.channel.send(client.config.OWNER_ID);
            }else{
                command.execute(client, msg, args);
            }
          
        }
      
    });

  
});

///////////////////////////////////////////////////////////////////////////////

client.login(client.config.TOKEN);