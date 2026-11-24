import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the bot. If the status is Failed, the reasons for the failure are listed in the
 * failureReasons field.
 */
export const BotLocaleStatus4 = {
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
export type BotLocaleStatus4 = (typeof BotLocaleStatus4)[keyof typeof BotLocaleStatus4] | (string & {});

export const botLocaleStatus4Schema: EnumSchema<BotLocaleStatus4> =
  s.enumOf<BotLocaleStatus4>(BotLocaleStatus4);
