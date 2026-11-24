import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines the strategy for the GTT order leg: ENTRY - First leg order STOPLOSS - Stop-loss order
 * TARGET - Target order
 */
export const Strategy = {
  Entry: "ENTRY",
  Stoploss: "STOPLOSS",
  Target: "TARGET",
} as const;
export type Strategy = (typeof Strategy)[keyof typeof Strategy] | (string & {});

export const strategySchema: EnumSchema<Strategy> = s.enumOf<Strategy>(Strategy);
