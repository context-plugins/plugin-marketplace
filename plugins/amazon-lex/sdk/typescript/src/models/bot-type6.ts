import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the bot that was updated. */
export const BotType6 = {
  Bot: "Bot",
  BotNetwork: "BotNetwork",
} as const;
export type BotType6 = (typeof BotType6)[keyof typeof BotType6] | (string & {});

export const botType6Schema: EnumSchema<BotType6> = s.enumOf<BotType6>(BotType6);
