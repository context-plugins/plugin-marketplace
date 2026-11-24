import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the bot that was described. */
export const BotType3 = {
  Bot: "Bot",
  BotNetwork: "BotNetwork",
} as const;
export type BotType3 = (typeof BotType3)[keyof typeof BotType3] | (string & {});

export const botType3Schema: EnumSchema<BotType3> = s.enumOf<BotType3>(BotType3);
