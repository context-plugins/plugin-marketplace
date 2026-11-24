import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the bot locale. When the status is Built the locale is ready for use. */
export const BotLocaleStatus = {
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
export type BotLocaleStatus = (typeof BotLocaleStatus)[keyof typeof BotLocaleStatus] | (string & {});

export const botLocaleStatusSchema: EnumSchema<BotLocaleStatus> = s.enumOf<BotLocaleStatus>(BotLocaleStatus);
