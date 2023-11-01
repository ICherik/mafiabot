const { random } = require('adler-random')
const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 1,
	data: new SlashCommandBuilder()
		.setName('cardgenerator')
		.setDescription('Generate Random Cards')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.addUserOption(option => option.setName('target').setDescription('select a target for job').setRequired(true)),
	category: 'mafia',
	async execute(interaction) {
		const group = ['Mafia', 'Godfather','Dr Shahrvand', 'Karagah', 'Sniper', 'Jan Sakht', 'Ghazi', 'Shahrvand Sade']
		const Colors = {
			'Mafia' : "#ff0000",
			'Godfather' : "#ff0000",
			'Dr Lecter' : "#ff0000",
			'Dr Shahrvand' : "#00ff1b",
			'Karagah' : "#00ff1b",
			'Sniper' : "#00ff1b",
			'Jan Sakht' : "#00ff1b",
			'Ghazi' : "#00ff1b",
			'Shahrvand Sade' : "#00ff1b",
		}
		const member = interaction.options.getMember('target');
		const card = new EmbedBuilder()
		.setTitle('Card Generator')
		.setDescription(`${member} has the **${random(group)}**`)
		.setThumbnail(`${member.displayAvatarURL({ Dynamic: true })}`)
		.setTimestamp()
		.setColor(Colors[random(group)])
		.setFooter({text : "Developed By Cherik#1044"})
		return interaction.reply({ embeds: [card] , ephemeral: true });
	},
};

