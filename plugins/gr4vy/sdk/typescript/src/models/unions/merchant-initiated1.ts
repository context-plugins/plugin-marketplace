import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that were initiated by the merchant. The value
 * should be either "0" (false) or "1" (true).
 */
export type MerchantInitiated1 = string[];

export const merchantInitiated1Schema: Schema<MerchantInitiated1> = s.of<MerchantInitiated1>(
  s.union([s.array(s.string())]),
);
