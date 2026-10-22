import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The amount deducted for all transaction fees. */
export type AmountNullable2 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amountNullable2Schema: Schema<AmountNullable2> = s.object<AmountNullable2>({
  currency: s.string(),
  value: s.string(),
});
