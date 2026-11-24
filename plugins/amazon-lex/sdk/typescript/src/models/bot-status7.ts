import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the bot. When the status is Available, the bot version is ready for use.
 */
export const BotStatus7 = {
  Creating: "Creating",
  Available: "Available",
  Inactive: "Inactive",
  Deleting: "Deleting",
  Failed: "Failed",
  Versioning: "Versioning",
  Importing: "Importing",
  Updating: "Updating",
} as const;
export type BotStatus7 = (typeof BotStatus7)[keyof typeof BotStatus7] | (string & {});

export const botStatus7Schema: EnumSchema<BotStatus7> = s.enumOf<BotStatus7>(BotStatus7);
