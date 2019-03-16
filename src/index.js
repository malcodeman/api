import telegraf from "telegraf";
import { getDayOfYear } from "date-fns";

const bot = new telegraf(process.env.BOT_TOKEN);
const dayOfYear = getDayOfYear(new Date());
const percentage = (dayOfYear / 365) * 100;

bot.start(ctx => ctx.reply(`${percentage.toFixed(2)}%`));
bot.launch();
