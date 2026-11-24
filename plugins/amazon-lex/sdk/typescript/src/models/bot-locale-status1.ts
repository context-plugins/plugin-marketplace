import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The bot's build status. When the status is ReadyExpressTesting you can test the bot using the
 * utterances defined for the intents and slot types. When the status is Built, the bot is ready for
 * use and can be tested using any utterance.
 */
export const BotLocaleStatus1 = {
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
export type BotLocaleStatus1 = (typeof BotLocaleStatus1)[keyof typeof BotLocaleStatus1] | (string & {});

export const botLocaleStatus1Schema: EnumSchema<BotLocaleStatus1> =
  s.enumOf<BotLocaleStatus1>(BotLocaleStatus1);
