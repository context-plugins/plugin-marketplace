import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of a bot that was created. */
export const BotType2 = {
  Bot: "Bot",
  BotNetwork: "BotNetwork",
} as const;
export type BotType2 = (typeof BotType2)[keyof typeof BotType2] | (string & {});

export const botType2Schema: EnumSchema<BotType2> = s.enumOf<BotType2>(BotType2);
