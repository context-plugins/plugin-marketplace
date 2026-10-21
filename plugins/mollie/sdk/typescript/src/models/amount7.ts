import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The gross total of received funds, i.e. including VAT */
export type Amount7 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount7Schema: Schema<Amount7> = s.object<Amount7>({
  currency: s.string(),
  value: s.string(),
});
