import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The method used to calculate the amount to be applied using one or more tiers. A single rate may
 * be applied to the entire balance or each applicable tier rate is applied to the portion of the
 * balance that falls into that tier (referred to as 'bands' or 'steps').
 */
export const RateApplicationMethod = {
  PerTier: "PER_TIER",
  WholeBalance: "WHOLE_BALANCE",
} as const;
export type RateApplicationMethod =
  | (typeof RateApplicationMethod)[keyof typeof RateApplicationMethod]
  | (string & {});

export const rateApplicationMethodSchema: EnumSchema<RateApplicationMethod> =
  s.enumOf<RateApplicationMethod>(RateApplicationMethod);
