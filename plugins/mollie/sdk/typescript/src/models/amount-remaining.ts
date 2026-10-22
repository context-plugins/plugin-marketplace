import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AmountRemaining = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amountRemainingSchema: Schema<AmountRemaining> = s.object<AmountRemaining>({
  currency: s.string(),
  value: s.string(),
});
