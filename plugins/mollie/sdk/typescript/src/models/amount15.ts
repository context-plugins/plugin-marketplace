import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The amount that you want to charge, e.g. `{currency:"EUR", value:"1000.00"}` if you would want to
 * charge €1000.00.
 *
 * You can find the minimum and maximum amounts per payment method in our help center. Additionally,
 * they can be retrieved using the Get method endpoint.
 *
 * If a tip was added for a Point-of-Sale payment, the amount will be updated to reflect the initial
 * amount plus the tip amount.
 */
export type Amount15 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount15Schema: Schema<Amount15> = s.object<Amount15>({
  currency: s.string(),
  value: s.string(),
});
