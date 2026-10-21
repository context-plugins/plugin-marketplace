import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The amount charged back by the customer. */
export type Amount28 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount28Schema: Schema<Amount28> = s.object<Amount28>({
  currency: s.string(),
  value: s.string(),
});
