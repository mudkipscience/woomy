const fetch = require("node-fetch")
exports.run = async (client, message) => {
  message.channel.startTyping();
  try {
    fetch('http://inspirobot.me/api?generate=true')
      .then(res => res.text())
      .then(body => message.channel.send({files: [new Discord.MessageAttachment(body)]}))
      .catch(err => {
        message.channel.send(`<:error:466995152976871434> An error has occurred: ${err}`);
      });
    message.channel.stopTyping();
  } catch (err) {
    message.channel.send(`<:error:466995152976871434> An error has occurred: ${err}`)
    message.channel.stopTyping();
  };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["inspire"],
  permLevel: "User",
  requiredPerms: []
};

exports.help = {
  name: "inspirobot",
  category: "Fun",
  description: "Returns an inspirational message generated by inspirobot.",
  usage: "inspirobot"
};
