import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The total amount of deductions withheld from the movement. For example, if we charge a €0.29 fee
 * on a €10 payment, the deductions amount will be `{"currency":"EUR", "value":"-0.29"}`.
 *
 * When moving funds to a balance, we always round the deduction to a 'real' amount. Any differences
 * between these real-time rounded amounts and the final invoice will be compensated when the
 * invoice is generated.
 */
export type AmountNullable1 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amountNullable1Schema: Schema<AmountNullable1> = s.object<AmountNullable1>({
  currency: s.string(),
  value: s.string(),
});
