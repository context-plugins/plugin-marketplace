import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.
 */
export type AmountNullable = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amountNullableSchema: Schema<AmountNullable> = s.object<AmountNullable>({
  currency: s.string(),
  value: s.string(),
});
