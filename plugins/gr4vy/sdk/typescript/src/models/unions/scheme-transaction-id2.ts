import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A scheme transaction identifier to associate with this payment method. Explicitly setting this
 * field to `null` will also clear `scheme_transaction_id_scheme` as a side-effect. When setting a
 * new value and `scheme_transaction_id_scheme` is both omitted from the payload and previously
 * unset, `scheme_transaction_id_scheme` will be populated from the payment method's existing
 * `scheme`.
 */
export type SchemeTransactionId2 = string;

export const schemeTransactionId2Schema: Schema<SchemeTransactionId2> = s.of<SchemeTransactionId2>(
  s.union([s.string()]),
);
