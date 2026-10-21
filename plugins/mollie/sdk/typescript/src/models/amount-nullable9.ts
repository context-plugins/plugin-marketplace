import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The amount captured. If no amount is provided, the full authorized amount is captured. */
export type AmountNullable9 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amountNullable9Schema: Schema<AmountNullable9> = s.object<AmountNullable9>({
  currency: s.string(),
  value: s.string(),
});
