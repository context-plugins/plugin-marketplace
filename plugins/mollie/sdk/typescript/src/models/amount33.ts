import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The amount of the transfer, e.g. `{"currency":"EUR", "value":"100.00"}` if you would want to
 * transfer €100.00.
 *
 * Only `EUR` is supported for SEPA transfers.
 */
export type Amount33 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount33Schema: Schema<Amount33> = s.object<Amount33>({
  currency: s.string(),
  value: s.string(),
});
