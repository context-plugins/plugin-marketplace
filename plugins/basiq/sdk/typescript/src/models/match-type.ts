import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the method used to match a payment transaction with a merchant or business
 * classification code.
 */
export const MatchType = {
  MerchantFull: "merchantFull",
  MerchantPartial: "merchantPartial",
  Mcc: "mcc",
  Ml: "ml",
} as const;
export type MatchType = (typeof MatchType)[keyof typeof MatchType] | (string & {});

export const matchTypeSchema: EnumSchema<MatchType> = s.enumOf<MatchType>(MatchType);
