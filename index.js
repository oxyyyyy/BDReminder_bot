const TeleBot = require('telebot');
const bot = new TeleBot('578626845:AAFtcGL769RWinqfrxSe93vJSB2QFN9gx7E');

// При /start
bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
// При тексте
// bot.on('text', (msg) => msg.reply.text(msg.text));
// При стикере
bot.on('sticker', (msg) => {
	return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});
// При кастомной команде
bot.on('/hi', (msg) => {
  return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
});
bot.on('/remember', (msg) => {
	let date = msg.text;
	return date
});

bot.start();
