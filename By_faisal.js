const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("ايدي الروم")
setInterval(function() {
channel.send(`اسم الروم `);
}, 25)
})
 
 
client.login('TOKEN');