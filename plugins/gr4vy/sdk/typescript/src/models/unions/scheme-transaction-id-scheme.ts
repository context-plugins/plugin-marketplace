import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

/** The scheme associated with scheme_transaction_id. Only applies to card payments. */
export type SchemeTransactionIdScheme = CardScheme;

export const schemeTransactionIdSchemeSchema: Schema<SchemeTransactionIdScheme> =
  s.of<SchemeTransactionIdScheme>(s.union([s.lazy(() => cardSchemeSchema)]));
