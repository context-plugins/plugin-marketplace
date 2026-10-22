import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The amount deducted for Mollie Capital repayments. */
export type AmountNullable4 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amountNullable4Schema: Schema<AmountNullable4> = s.object<AmountNullable4>({
  currency: s.string(),
  value: s.string(),
});
