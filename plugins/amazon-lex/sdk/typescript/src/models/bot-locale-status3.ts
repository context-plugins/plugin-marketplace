import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of deleting the bot locale. The locale first enters the Deleting status. Once the
 * locale is deleted it no longer appears in the list of locales for the bot.
 */
export const BotLocaleStatus3 = {
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
export type BotLocaleStatus3 = (typeof BotLocaleStatus3)[keyof typeof BotLocaleStatus3] | (string & {});

export const botLocaleStatus3Schema: EnumSchema<BotLocaleStatus3> =
  s.enumOf<BotLocaleStatus3>(BotLocaleStatus3);
