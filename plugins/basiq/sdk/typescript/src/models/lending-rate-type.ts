import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of rate (fixed, variable, etc). */
export const LendingRateType = {
  BundleDiscountFixed: "BUNDLE_DISCOUNT_FIXED",
  BundleDiscountVariable: "BUNDLE_DISCOUNT_VARIABLE",
  CashAdvance: "CASH_ADVANCE",
  Discount: "DISCOUNT",
  Fixed: "FIXED",
  Floating: "FLOATING",
  Introductory: "INTRODUCTORY",
  MarketLinked: "MARKET_LINKED",
  Penalty: "PENALTY",
  Purchase: "PURCHASE",
  Variable: "VARIABLE",
} as const;
export type LendingRateType = (typeof LendingRateType)[keyof typeof LendingRateType] | (string & {});

export const lendingRateTypeSchema: EnumSchema<LendingRateType> = s.enumOf<LendingRateType>(LendingRateType);
