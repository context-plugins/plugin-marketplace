import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the bot. When the status is Available the bot is ready to be used in
 * conversations with users.
 */
export const BotStatus6 = {
  Creating: "Creating",
  Available: "Available",
  Inactive: "Inactive",
  Deleting: "Deleting",
  Failed: "Failed",
  Versioning: "Versioning",
  Importing: "Importing",
  Updating: "Updating",
} as const;
export type BotStatus6 = (typeof BotStatus6)[keyof typeof BotStatus6] | (string & {});

export const botStatus6Schema: EnumSchema<BotStatus6> = s.enumOf<BotStatus6>(BotStatus6);
