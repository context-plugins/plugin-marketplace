import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of a bot to create. */
export const BotType1 = {
  Bot: "Bot",
  BotNetwork: "BotNetwork",
} as const;
export type BotType1 = (typeof BotType1)[keyof typeof BotType1] | (string & {});

export const botType1Schema: EnumSchema<BotType1> = s.enumOf<BotType1>(BotType1);
