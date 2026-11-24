import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the bot. */
export const BotType = {
  Bot: "Bot",
  BotNetwork: "BotNetwork",
} as const;
export type BotType = (typeof BotType)[keyof typeof BotType] | (string & {});

export const botTypeSchema: EnumSchema<BotType> = s.enumOf<BotType>(BotType);
