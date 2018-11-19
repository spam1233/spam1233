const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("514075872752304161")
setInterval(function() {
channel.send(`spam`);
}, 25)
})
 
 
client.login('NDYzMjU0MDIxNDI4MzQ2ODkw.DtRPmg.N5LpulWev2sXzKqOR0AgQ7nGKJQ');
