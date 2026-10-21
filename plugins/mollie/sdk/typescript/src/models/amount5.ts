import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The gross total cost, i.e. including VAT */
export type Amount5 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount5Schema: Schema<Amount5> = s.object<Amount5>({
  currency: s.string(),
  value: s.string(),
});
