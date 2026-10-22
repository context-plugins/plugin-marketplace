import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The amount for each individual payment that is charged with this subscription. For example, for a
 * monthly subscription of €10, the subscription amount should be set to €10.
 */
export type Amount49 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount49Schema: Schema<Amount49> = s.object<Amount49>({
  currency: s.string(),
  value: s.string(),
});
