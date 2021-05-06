const dbd = require("aoi.js")

const bot = new Aoijs.Bot({
token: "here", 
prefix: "here" 
})


bot.onMessage()


bot.status({
  text: "Thanks Snipeur060 💻снайпер060⌨#8273",
  type: "PLAYING",
  status: "dnd",
  time: 12
})

bot.loadCommands('./commands/')
