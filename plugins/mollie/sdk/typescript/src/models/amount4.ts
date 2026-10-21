import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The net total cost, i.e. excluding VAT */
export type Amount4 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount4Schema: Schema<Amount4> = s.object<Amount4>({
  currency: s.string(),
  value: s.string(),
});
