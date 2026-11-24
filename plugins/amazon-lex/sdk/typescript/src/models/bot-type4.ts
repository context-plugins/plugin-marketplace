import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the bot in the version that was described. */
export const BotType4 = {
  Bot: "Bot",
  BotNetwork: "BotNetwork",
} as const;
export type BotType4 = (typeof BotType4)[keyof typeof BotType4] | (string & {});

export const botType4Schema: EnumSchema<BotType4> = s.enumOf<BotType4>(BotType4);
