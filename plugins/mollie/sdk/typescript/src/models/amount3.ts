import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount3 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount3Schema: Schema<Amount3> = s.object<Amount3>({
  currency: s.string(),
  value: s.string(),
});
