import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The total available balance of the business account. */
export type Amount51 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount51Schema: Schema<Amount51> = s.object<Amount51>({
  currency: s.string(),
  value: s.string(),
});
