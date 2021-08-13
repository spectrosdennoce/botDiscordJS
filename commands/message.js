const Discord = require("discord.js");
const chalk = require('chalk');
const tool = require('../tool.js');
const cfg = require('../config.js');
const client = new Discord.Client();
const owner = cfg.config.OWNER_ID;
const prefix = cfg.config.PREFIX;

exports.execute = (client, message, args) => {
if(message.author.id !== owner ) 
if(!message.author.id !== owner ) return message.channel.sendMessage("Vous n'avez pas la permission **SUPER-ADMIN** !!");
  message.delete().catch(O_o=>{}); 
      
  let reason = args.slice(1).join(' ');
  message.channel.send(reason)
      
};

exports.info = {
    name: "message",
    alias: [],
    permission: "default",
    type: "owner"
};