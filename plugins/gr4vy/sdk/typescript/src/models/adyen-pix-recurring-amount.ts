import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currency8Schema, type Currency8 } from "./unions/currency8.js";
import { value4Schema, type Value4 } from "./unions/value4.js";

export type AdyenPixRecurringAmount = {
  /** Amount in the smallest currency unit for the given currency */
  value?: Value4;
  /** ISO 4217 currency code */
  currency?: Currency8;
};

export const adyenPixRecurringAmountSchema: Schema<AdyenPixRecurringAmount> =
  s.object<AdyenPixRecurringAmount>({
    value: s.optional(s.lazy(() => value4Schema)),
    currency: s.optional(s.lazy(() => currency8Schema)),
  });
