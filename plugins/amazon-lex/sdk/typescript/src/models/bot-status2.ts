import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Shows the current status of the bot. The bot is first in the Creating status. Once the bot is
 * read for use, it changes to the Available status. After the bot is created, you can use the DRAFT
 * version of the bot.
 */
export const BotStatus2 = {
  Creating: "Creating",
  Available: "Available",
  Inactive: "Inactive",
  Deleting: "Deleting",
  Failed: "Failed",
  Versioning: "Versioning",
  Importing: "Importing",
  Updating: "Updating",
} as const;
export type BotStatus2 = (typeof BotStatus2)[keyof typeof BotStatus2] | (string & {});

export const botStatus2Schema: EnumSchema<BotStatus2> = s.enumOf<BotStatus2>(BotStatus2);
