const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Join voice channel first.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel.`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No songs currently playing.`);
      const embed = new MessageEmbed()
      .setTitle(`Queue for ${message.guild.name}.`)
      .setDescription(`${client.emotes.queue} : ${client.player.getQueue(message).loopMode ? '(looped)' : 'disabled'}\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `\`${i + 1}\` - ${track.title} | ${track.author} (requested by : \`${track.requestedBy.username}\`)`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And \`${queue.tracks.length - 5}\` other songs...` : `In the playlist \`${queue.tracks.length}\` song(s)...`}`))

        message.channel.send(embed);
    },
};