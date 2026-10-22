import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DiscountedSubtotalAmount = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const discountedSubtotalAmountSchema: Schema<DiscountedSubtotalAmount> =
  s.object<DiscountedSubtotalAmount>({
    currency: s.string(),
    value: s.string(),
  });
