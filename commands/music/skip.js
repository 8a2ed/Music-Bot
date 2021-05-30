module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Join voice channel first.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing.`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - Skipped.`);
    },
};