import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The amount deducted for rolling reservations. */
export type AmountNullable5 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amountNullable5Schema: Schema<AmountNullable5> = s.object<AmountNullable5>({
  currency: s.string(),
  value: s.string(),
});
