import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the locale. When the bot status is Built the locale is ready for use. */
export const BotLocaleStatus5 = {
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
export type BotLocaleStatus5 = (typeof BotLocaleStatus5)[keyof typeof BotLocaleStatus5] | (string & {});

export const botLocaleStatus5Schema: EnumSchema<BotLocaleStatus5> =
  s.enumOf<BotLocaleStatus5>(BotLocaleStatus5);
