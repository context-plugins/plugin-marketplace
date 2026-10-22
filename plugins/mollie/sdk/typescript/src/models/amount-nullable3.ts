import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The amount deducted for commissions (e.g Application fees). */
export type AmountNullable3 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amountNullable3Schema: Schema<AmountNullable3> = s.object<AmountNullable3>({
  currency: s.string(),
  value: s.string(),
});
