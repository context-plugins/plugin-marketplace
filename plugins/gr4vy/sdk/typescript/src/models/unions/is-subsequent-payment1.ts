import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that are subsequent payments. A subsequent
 * payment is a payment that is made after an initial payment, typically in a subscription or
 * recurring payment scenario. The value should be either "0" (false) or "1" (true).
 */
export type IsSubsequentPayment1 = string[];

export const isSubsequentPayment1Schema: Schema<IsSubsequentPayment1> = s.of<IsSubsequentPayment1>(
  s.union([s.array(s.string())]),
);
