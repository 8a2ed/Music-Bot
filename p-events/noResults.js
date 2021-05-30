module.exports = (client, message, query) => {
    message.channel.send(`No results found on youtube for ${query}`);
};