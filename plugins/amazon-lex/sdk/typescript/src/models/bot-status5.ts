import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the bot. */
export const BotStatus5 = {
  Creating: "Creating",
  Available: "Available",
  Inactive: "Inactive",
  Deleting: "Deleting",
  Failed: "Failed",
  Versioning: "Versioning",
  Importing: "Importing",
  Updating: "Updating",
} as const;
export type BotStatus5 = (typeof BotStatus5)[keyof typeof BotStatus5] | (string & {});

export const botStatus5Schema: EnumSchema<BotStatus5> = s.enumOf<BotStatus5>(BotStatus5);
