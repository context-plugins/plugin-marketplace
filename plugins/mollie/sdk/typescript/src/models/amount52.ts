import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The total balance of the business account after this transaction. */
export type Amount52 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount52Schema: Schema<Amount52> = s.object<Amount52>({
  currency: s.string(),
  value: s.string(),
});
