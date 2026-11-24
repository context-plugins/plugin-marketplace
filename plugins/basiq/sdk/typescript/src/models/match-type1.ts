import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the method used to match a payment transaction with a merchant or business
 * classification code. Description for each enum; merchantFull: Indicates an exact match between
 * the transaction and a known merchant in the database. merchantPartial: Suggests a partial match
 * with a merchant, usually based on substring or fuzzy logic. mcc: Match is done using the Merchant
 * Category Code associated with the transaction. ml: Match is determined through machine learning
 * algorithms for classification
 */
export const MatchType1 = {
  MerchantFull: "merchantFull",
  MerchantPartial: "merchantPartial",
  Mcc: "mcc",
  Ml: "ml",
} as const;
export type MatchType1 = (typeof MatchType1)[keyof typeof MatchType1] | (string & {});

export const matchType1Schema: EnumSchema<MatchType1> = s.enumOf<MatchType1>(MatchType1);
