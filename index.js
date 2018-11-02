const dotenv = require("dotenv").config();
const http = require("http");
const Discord = require("discord.js");
const client = new Discord.Client();
const CommandSystem = require("./command-system.js")();

client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  CommandSystem.execute(client, message);
});

CommandSystem.load(function() {
  console.log("Command system loaded.");
});

client.login(process.env.TOKEN);

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plan" });
    res.write("Hello! This is a Discord bot. Nothing to see here.");
    res.end();
  })
  .listen(process.env.PORT || 8080);
