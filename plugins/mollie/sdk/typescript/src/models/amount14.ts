import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An amount object for the amount that remained after all gift cards or vouchers were applied. */
export type Amount14 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount14Schema: Schema<Amount14> = s.object<Amount14>({
  currency: s.string(),
  value: s.string(),
});
