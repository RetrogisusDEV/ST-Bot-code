const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    ]
});
// const DataBa = require("@replit/database");
// const dbs= new DataBa()
const express = require('express');
const app = express();
app.listen(() => console.log(`Server IS Started`));
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
// PROPERTIES
const token = process.env['Token'];
client.login(token);

client.on('ready', () => {
    console.log(`${client.user.username}: I am ready ✅`)
    client.user.setPresence({
        status: "online",
        activities: [{
            name: `/Slash!!!`,
        }]
    });

    const cmds = [];
    const { SlashCommandBuilder } = require('@discordjs/builders');

    const ping = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('reply PONG');
    const info = new SlashCommandBuilder()
        .setName('info')
        .setDescription('info of ST');
    const work = new SlashCommandBuilder()
        .setName('work')
        .setDescription('crashea...');
const mySecret = process.env['token']
    const profile = new SlashCommandBuilder()
        .setName('profile')
        .setDescription('view profile');



    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        if (interaction.commandName === "ping") {
            interaction.reply(">>> pong")

        }
    });

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        if (interaction.commandName === "info") {
            interaction.reply(`>>> Bot Name : ${client.user.username} \n BotID : ${client.user.id} \n Bot tag : ${client.user.tag} \n \n request by: <@${interaction.user.id}>`)

        }
    });
    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        if (interaction.commandName === "work") {
           let amount = 100;
			// let work  = dbs.set(`${interaction.user.id}`,`${amount}`).then(value => {})
			interaction.reply(`>>> you gain \n Exp:${amount} and Money:${amount}`)
         
                  }
    });

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        if (interaction.commandName === "profile") {
         // let bal = dbs.get(`${interaction.user.id}`).then(() => {})
		// interaction.reply(`balance ${bal}`)
		}});
    cmds.push(ping);
    cmds.push(info);
    cmds.push(work);
    cmds.push(profile);

    const { REST } = require('@discordjs/rest')
    const { Routes } = require('discord-api-types/v9');
    const rest = new REST({ version: '9' }).setToken(token);

    try {
        console.log("Slash Commands Loading ⌛ .")
        rest.put(
            Routes.applicationCommands(client.user.id), { body: cmds },
        );
        console.log("Slash Commands are Online now ✅ .")
    } catch (error) {
        console.error(error);
    } finally {
        console.log(cmds)
    }
});
const Database = require("@replit/database")
const db = new Database()
const Database = require("@replit/database")
const db = new Database()
const Database = require("@replit/database")
const db = new Database()
db.set("key", "value").then(() => {})
db.set("key", "value").then(() => {})
db.get("key").then(value => {})
db.get("key").then(value => {})
