const Discord = require("discord.js");
const chalk = require('chalk');
const tool = require('../tool.js');
const cfg = require('../config.js');
const client = new Discord.Client();
const owner = cfg.config.OWNER_ID;
const prefix = cfg.config.PREFIX;
exports.execute = (client, message, args) => {
  message.delete().catch(O_o=>{}); 
	if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Vous n'avez pas la permission **BAN** !!");
	async function clear() {
            const fetched = await message.channel.fetchMessages({limit: 99});
            message.channel.bulkDelete(fetched);
        }
        clear();
}

exports.info = {
    name: "delete",
    alias: [],
    permission: "default",
    type: "owner"
};