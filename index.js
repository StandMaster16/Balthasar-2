const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command.js')

client.on('ready', () => {
    console.log('OwO?')

    command(client, ['OwO'], (message) => {
        message.channel.send('OwO?')
    })

    command(client, ['help', 'comandos'], (message) => {
        message.channel.send('comandos by Balthasar-2 0.0.13')
    })

    command(client, ['ping', 'test'], (message) => {
        message.channel.send('Pong!')
    })
})

client.login(config.token)