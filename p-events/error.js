module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`There is no music being played on this server.`);
            break;
        case 'NotConnected':
            message.channel.send(`You are not connected in any voice channel.`);
            break;
        case 'UnableToJoin':
            message.channel.send(`I'm not able to join your voice channel.`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`**${args[0].title}** is not available in your country, Skipping.`);
            break;
        case 'MusicStarting':
            message.channel.send(`The music is starting.`);
            break;
        default:
            message.channel.send(`Error: ${error}`);
    };
};
