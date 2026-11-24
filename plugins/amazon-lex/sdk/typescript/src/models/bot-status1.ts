import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the bot. When the status is available, the version of the bot is ready for use. */
export const BotStatus1 = {
  Creating: "Creating",
  Available: "Available",
  Inactive: "Inactive",
  Deleting: "Deleting",
  Failed: "Failed",
  Versioning: "Versioning",
  Importing: "Importing",
  Updating: "Updating",
} as const;
export type BotStatus1 = (typeof BotStatus1)[keyof typeof BotStatus1] | (string & {});

export const botStatus1Schema: EnumSchema<BotStatus1> = s.enumOf<BotStatus1>(BotStatus1);
