const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    ]
});
const db = require('megadb');
let Exp = new db.crearDB('Exp');
let Money = new db.crearDB('Money');

const express = require('express');
const app = express();
app.listen(() => console.log(`Server IS Started`));
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
// PROPERTIES
const token = 'OTI5NzkxNDkxNTc5MjA3NzMw.Gk0HwW.43p29eAgLpgAosSgjx9gW4WZjMzoxx4LRzAhvo';
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
        .setDescription('gain exp and money');
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
            if (Exp.has(`exp_${interaction.user.id}`)) Exp.set(`exp_${interaction.user.id}`,0);
            let moneyT = Math.floor(Math.random() * 1500) + 100;
            let expT = Math.floor(Math.random() * 1500) + 100;
            interaction.reply(`>>> you gain \n Exp:${expT} and Money:${moneyT}`)
         Exp.sumar(`exp_${interaction.user.id}`, expT);
          Money.sumar(`money_${interaction.user.id}`, moneyT);
        }
    });

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        if (interaction.commandName === "profile") {
        await exp = Exp.obtener(`exp_${interaction.user.id}`);    
  if (exp === null) exp = 0;
            
       await interaction.reply(`>>> profile account \n exp: ${exp}`)                                                           }});
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