import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

/**
 * The scheme associated with `scheme_transaction_id`. Only applies to card payments. When setting a
 * new value for `scheme_transaction_id`, if `scheme_transaction_id_scheme` is both omitted from the
 * payload and previously unset, `scheme_transaction_id_scheme` will be populated from the payment
 * method's existing `scheme`.
 */
export type SchemeTransactionIdScheme2 = CardScheme;

export const schemeTransactionIdScheme2Schema: Schema<SchemeTransactionIdScheme2> =
  s.of<SchemeTransactionIdScheme2>(s.union([s.lazy(() => cardSchemeSchema)]));
