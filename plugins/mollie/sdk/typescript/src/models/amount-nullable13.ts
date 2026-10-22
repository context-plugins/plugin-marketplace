import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The amount to pay out. When omitted from the request, the full available balance minus any
 * configured balance reserve is paid out.
 *
 * Merchants registered in the United Kingdom cannot specify a custom amount — omit this field to
 * pay out the full available balance.
 *
 * The value in the response reflects the amount paid out, excluding any applicable fees.
 */
export type AmountNullable13 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amountNullable13Schema: Schema<AmountNullable13> = s.object<AmountNullable13>({
  currency: s.string(),
  value: s.string(),
});
