const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('5495713934:AAEa1TCwT0N1mmuoohWRlT9FrnN2hTX9G2Q');

bot.start((ctx) => ctx.reply(`Привет🖐🏻 ${ctx.message.from.first_name}`));

bot.on('text', (ctx) => {    
    const message = ctx.message.text.toLocaleLowerCase();

    if(message.includes('привет')) {
        ctx.reply(`Привет🖐🏻 ${ctx.message.from.first_name}`);
    }

    if(message.includes('доброе утро')) {
        ctx.reply(`Доброе утро`);
    }
});

bot.on('new_chat_member', ctx => {
    ctx.reply(`Привет @${ctx.message.from.username}👋

Добро пожаловать в группу NFT-завтраков Екатеринбурга! Если ты здесь, то наверняка интересуешься темой NFT. 
    
Напиши пару слов о себе: как тебя зовут? Чем занимаешься, чем интересна тема NFT? 
    
Присоединяйся к нашим встречам по вторникам c 18:00 до 20:00. Анонсы можно найти в закреплённых сообщениях✌️`)
});

bot.launch();   