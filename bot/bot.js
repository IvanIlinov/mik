// bot/bot.js
const { Telegraf } = require('telegraf');
const bot = new Telegraf('7987078264:AAEc6fjUVj7PF3AhFMILGET807ZTmGoPU_8');

bot.start((ctx) => {
  ctx.reply('bot.js - работает!', {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'Открыть',
            web_app: { url: 'https://9dff-77-238-241-108.ngrok-free.app' }
          }
        ]
      ],
      resize_keyboard: true
    }
  });
});

bot.launch();
console.log('Бот запущен');
