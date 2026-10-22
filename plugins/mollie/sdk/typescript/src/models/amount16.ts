import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The fee that you wish to charge.
 *
 * Be careful to leave enough space for Mollie's own fees to be deducted as well. For example, you
 * cannot charge a €0.99 fee on a €1.00 payment.
 */
export type Amount16 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount16Schema: Schema<Amount16> = s.object<Amount16>({
  currency: s.string(),
  value: s.string(),
});
