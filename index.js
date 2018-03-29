const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '578626845:AAFtcGL769RWinqfrxSe93vJSB2QFN9gx7E';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

var BDs = [];

// bot.onText(/\/test/, msg => {
// 	const userId = msg.from.id;
// 	bot.sendMessage(userId, userId)
// })

bot.onText(/\/addBD of (.+) on (.+)/, msg => {
	const userId = msg.from.id;
	var name = match[1];
	var date = match[2];

	BDs.push( { 'uid':userId, 'name':name, 'date':date } );

	bot.sendMessage(userId, BDs);
})

// bot.on('polling_error', (error) => {
//   console.log(error.code);  // => 'EFATAL'
// });
