module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`The selection has been cancelled.`);
    } else message.channel.send(`You must send a valid number between \`1\` and \`${tracks.length}\` !`);
};