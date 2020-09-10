//KBB servers id: 752890484581466212

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
   console.log(`Connected as\` ${client.user.tag} `)

   var array = ['Google', 'Youtube', 'Twitch', 'StandOff', 'E3', 'Netflix']
   var randomThing = array[Math.floor(Math.random() * array.length)]

   client.user.setActivity(`${randomThing}`, { type: 'WATCHING' })

   client.guilds.cache.forEach((guild) => {
      console.log(`Server Name: ${guild.name}`)

      guild.channels.cache.forEach(channel => {
         console.log(`[ NAME: ${channel.name}, TYPE: ${channel.type}, ID: ${channel.id} ]`)
      })

      let botChannel = client.channels.cache.get('752890484581466212')
      botChannel.send('I\'m Connected')
   })
})

client.on('message', msg => {

   if (msg.author == client.user) {
      return
   }

   if ((msg.content.includes('Hello') || msg.content.includes('Hi')) && (msg.content.includes('Mikle') || msg.content.includes('Man'))) {
      msg.reply(`Hello, Whats Up`)
   }

   if ((msg.content.includes('Whats Up') || msg.content.includes('whats up')) && (msg.content.includes('Mikle') || msg.content.includes('Man'))) {
      msg.reply(`Nothing`)
   }

   if (msg.content.toLowerCase() == "please help"){
      msg.reply(`Type '$help'`)
   }

   if ((msg.content.toLowerCase().includes('fuck you mikle'))) {
      msg.reply(':(')
   }

   if (msg.content == '$mikle'){
      msg.channel.send(`tag: ${client.user.tag},\nuser name: ${client.user.username},\nid: ${client.user.id}.`)
   }

   if (msg.content.startsWith('$')) {
      processCommand(msg)
   }

})

function processCommand(receivedMessage) {
   let fullCommand = receivedMessage.content.substr(1)
   let splitCommand = fullCommand.split(' ')
   let primaryCommand = splitCommand[0]
   let arguments = splitCommand.slice(1)

   if (primaryCommand == 'help') {
      helpCommand(arguments, receivedMessage)
   }
}

function helpCommand(arguments, receivedMessage) {
   if (arguments.length == 0) {

      receivedMessage.channel.send(`Commands: 
      $help channels.all - showing all Channels
      $help server.name - showing Servers Name
      $help server.id - showing Servers ID
      $help myID - showing Your Account ID`)

   } else {
      if (arguments == "channels.all") {
         client.guilds.cache.forEach((guild) => {
            console.log(`Server Name: ${guild.name}`)

            guild.channels.cache.forEach(channel => {
               receivedMessage.channel.send(`[ NAME: ${channel.name}, TYPE: ${channel.type}, ID: ${channel.id} ]`)
            })
            return
         })
      }

      //Commands`

      if (arguments == "server.name"){
         client.guilds.cache.forEach((guild) => {
            receivedMessage.channel.send(`NAME: ${guild.name}`)
         })
      }

      if (arguments == "server.id"){
         client.guilds.cache.forEach((guild) => {
            receivedMessage.channel.send(`ID: ${guild.id}`)
         })
      }

      if (arguments == "myID"){
         client.guilds.cache.forEach(() => {
            receivedMessage.reply(`Your ID: ${receivedMessage.author.id.toString()}`)
         })
      }
   }
}

client.login('NzUyODgxNDE2OTk1NDcxNDAw.X1eFdQ.x30efnO0FMKoa61sWCppKXjV3Qs')
