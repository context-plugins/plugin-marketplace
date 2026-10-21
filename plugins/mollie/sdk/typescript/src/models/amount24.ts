import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The amount refunded to your customer with this refund. The amount is allowed to be lower than the
 * original payment amount.
 */
export type Amount24 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount24Schema: Schema<Amount24> = s.object<Amount24>({
  currency: s.string(),
  value: s.string(),
});
