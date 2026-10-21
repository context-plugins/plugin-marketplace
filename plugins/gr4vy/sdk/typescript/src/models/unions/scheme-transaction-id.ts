import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The scheme transaction identifier stored against this payment method. */
export type SchemeTransactionId = string;

export const schemeTransactionIdSchema: Schema<SchemeTransactionId> = s.of<SchemeTransactionId>(
  s.union([s.string()]),
);
