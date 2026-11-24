import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of rate (base, bonus, etc). */
export const DepositRateType = {
  Bonus: "BONUS",
  BundleBonus: "BUNDLE_BONUS",
  Fixed: "FIXED",
  Floating: "FLOATING",
  Introductory: "INTRODUCTORY",
  MarketLinked: "MARKET_LINKED",
  Variable: "VARIABLE",
} as const;
export type DepositRateType = (typeof DepositRateType)[keyof typeof DepositRateType] | (string & {});

export const depositRateTypeSchema: EnumSchema<DepositRateType> = s.enumOf<DepositRateType>(DepositRateType);
