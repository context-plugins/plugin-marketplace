import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the bot to be updated. */
export const BotType5 = {
  Bot: "Bot",
  BotNetwork: "BotNetwork",
} as const;
export type BotType5 = (typeof BotType5)[keyof typeof BotType5] | (string & {});

export const botType5Schema: EnumSchema<BotType5> = s.enumOf<BotType5>(BotType5);
