import { Client, Collection, GatewayIntentBits } from 'discord.js';
import config from './config';

interface FridayClient extends Client {
  commands: Collection<string, any>;
}

const bot: FridayClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
}) as FridayClient;

// TODO: Register commands and events

bot.login(config.token);
