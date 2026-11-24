import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the bot. When the status is Available the bot is ready for use. */
export const BotStatus = {
  Creating: "Creating",
  Available: "Available",
  Inactive: "Inactive",
  Deleting: "Deleting",
  Failed: "Failed",
  Versioning: "Versioning",
  Importing: "Importing",
  Updating: "Updating",
} as const;
export type BotStatus = (typeof BotStatus)[keyof typeof BotStatus] | (string & {});

export const botStatusSchema: EnumSchema<BotStatus> = s.enumOf<BotStatus>(BotStatus);
