module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: `Results for ${query}` },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `\`${i + 1}.\` ${t.title}`).join('\n')}`,
        },
    });
};