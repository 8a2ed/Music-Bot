const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        console.log(`==============`)
        client.commands.set(command.name.toLowerCase(), command);
    };
});
console.log(`============================`)
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./p-events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading djs event ${file}`);
    console.log(`==============`)
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};
console.log(`============================`)
for (const file of player) {
    console.log(`Loading d-p event ${file}`);
    console.log(`==============`)
    const event = require(`./p-events/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.login(client.config.discord.token);