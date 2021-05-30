module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Join voice channel first.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing.`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - The music is already paused.`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - Paused.`);
    },
};