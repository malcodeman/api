import telegraf from "telegraf";
import { getDayOfYear } from "date-fns";

const bot = new telegraf(process.env.BOT_TOKEN);
const dayOfYear = getDayOfYear(new Date());
const percentage = (dayOfYear / 365) * 100;

function getProgress() {
  return `${percentage.toFixed(2)}%`;
}

bot.start(ctx => ctx.reply(getProgress()));
bot.command("source", ctx =>
  ctx.reply("https://github.com/malcodeman/year-progress-bot.git")
);
bot.launch();
