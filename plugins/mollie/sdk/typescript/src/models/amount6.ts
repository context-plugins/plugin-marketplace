import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The net total of received funds, i.e. excluding VAT */
export type Amount6 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount6Schema: Schema<Amount6> = s.object<Amount6>({
  currency: s.string(),
  value: s.string(),
});
