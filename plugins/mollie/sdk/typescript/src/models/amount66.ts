import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Update the amount for future payments of this subscription. */
export type Amount66 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount66Schema: Schema<Amount66> = s.object<Amount66>({
  currency: s.string(),
  value: s.string(),
});
