import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the bot. The status is Deleting while the bot and its associated resources
 * are being deleted.
 */
export const BotStatus4 = {
  Creating: "Creating",
  Available: "Available",
  Inactive: "Inactive",
  Deleting: "Deleting",
  Failed: "Failed",
  Versioning: "Versioning",
  Importing: "Importing",
  Updating: "Updating",
} as const;
export type BotStatus4 = (typeof BotStatus4)[keyof typeof BotStatus4] | (string & {});

export const botStatus4Schema: EnumSchema<BotStatus4> = s.enumOf<BotStatus4>(BotStatus4);
