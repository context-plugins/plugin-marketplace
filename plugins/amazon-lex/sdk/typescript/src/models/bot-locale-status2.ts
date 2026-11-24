import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the bot. When the status is Creating the bot locale is being configured. When the
 * status is Building Amazon Lex is building the bot for testing and use. If the status of the bot
 * is ReadyExpressTesting, you can test the bot using the exact utterances specified in the bots'
 * intents. When the bot is ready for full testing or to run, the status is Built. If there was a
 * problem with building the bot, the status is Failed. If the bot was saved but not built, the
 * status is NotBuilt.
 */
export const BotLocaleStatus2 = {
  Creating: "Creating",
  Building: "Building",
  Built: "Built",
  ReadyExpressTesting: "ReadyExpressTesting",
  Failed: "Failed",
  Deleting: "Deleting",
  NotBuilt: "NotBuilt",
  Importing: "Importing",
  Processing: "Processing",
} as const;
export type BotLocaleStatus2 = (typeof BotLocaleStatus2)[keyof typeof BotLocaleStatus2] | (string & {});

export const botLocaleStatus2Schema: EnumSchema<BotLocaleStatus2> =
  s.enumOf<BotLocaleStatus2>(BotLocaleStatus2);
