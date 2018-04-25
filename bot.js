const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDM2OTU0OTg2Mzc1NTQ0ODQz.DcJjRg.4bug72ru6eJ3vb8DQyoKU8BmHWs");
