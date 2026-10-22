import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An amount object containing the fee PayPal will charge for this transaction. The field may be
 * omitted if PayPal will not charge a fee for this transaction.
 */
export type AmountNullable8 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amountNullable8Schema: Schema<AmountNullable8> = s.object<AmountNullable8>({
  currency: s.string(),
  value: s.string(),
});
