import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalAmount = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const totalAmountSchema: Schema<TotalAmount> = s.object<TotalAmount>({
  currency: s.string(),
  value: s.string(),
});
