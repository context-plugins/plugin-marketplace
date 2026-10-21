import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Line item amount excluding VAT. */
export type Amount29 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount29Schema: Schema<Amount29> = s.object<Amount29>({
  currency: s.string(),
  value: s.string(),
});
