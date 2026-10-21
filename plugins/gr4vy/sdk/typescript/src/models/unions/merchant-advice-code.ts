import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * An optional merchant advice code which provides insight into the type of transaction or reason
 * why the payment failed.
 */
export type MerchantAdviceCode = string;

export const merchantAdviceCodeSchema: Schema<MerchantAdviceCode> = s.of<MerchantAdviceCode>(
  s.union([s.string()]),
);
