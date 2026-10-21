import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Total amount and currency of the recurring item. */
export type Amount12 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount12Schema: Schema<Amount12> = s.object<Amount12>({
  currency: s.string(),
  value: s.string(),
});
