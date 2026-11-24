import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * When you send a request to create or update a bot, Amazon Lex sets the status response element to
 * Creating. After Amazon Lex builds the bot, it sets status to Available. If Amazon Lex can't build
 * the bot, it sets status to Failed.
 */
export const BotStatus3 = {
  Creating: "Creating",
  Available: "Available",
  Inactive: "Inactive",
  Deleting: "Deleting",
  Failed: "Failed",
  Versioning: "Versioning",
  Importing: "Importing",
  Updating: "Updating",
} as const;
export type BotStatus3 = (typeof BotStatus3)[keyof typeof BotStatus3] | (string & {});

export const botStatus3Schema: EnumSchema<BotStatus3> = s.enumOf<BotStatus3>(BotStatus3);
