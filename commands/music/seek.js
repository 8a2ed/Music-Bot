const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}seek',

    execute(client, message, args) {
       if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Join voice channel first.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Please specify  a vaild number.`);

        const time = ms(args[0]);

        if (isNaN(time) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Please enter a valid number.`);
        const queue = client.player.getQueue(message);

        client.player.setPosition(message, queue.currentStreamTime + time)
        const track = client.player.nowPlaying(message);
        message.channel.send(`${client.emotes.success} - Music sought.`);
    },
};