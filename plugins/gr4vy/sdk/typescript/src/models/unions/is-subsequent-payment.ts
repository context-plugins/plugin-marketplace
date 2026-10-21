import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Indicates whether the transaction represents a subsequent payment coming from a setup recurring
 * payment. Please note there are some restrictions on how this flag may be used.
 *
 * The flag can only be `false` (or not set) when the transaction meets one of the following
 * criteria:
 *
 * * It is not `merchant_initiated`.
 * * `payment_source` is set to `card_on_file`.
 *
 * The flag can only be set to `true` when the transaction meets one of the following criteria:
 * * It is not `merchant_initiated`.
 * * `payment_source` is set to `recurring` or `installment` and `merchant_initiated` is set to
 *   `true`.
 * * `payment_source` is set to `card_on_file`.
 */
export type IsSubsequentPayment = boolean;

export const isSubsequentPaymentSchema: Schema<IsSubsequentPayment> = s.of<IsSubsequentPayment>(
  s.union([s.boolean()]),
);
