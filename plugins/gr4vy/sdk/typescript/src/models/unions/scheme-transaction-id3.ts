import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An identifier for the transaction used by the scheme itself, when available. */
export type SchemeTransactionId3 = string;

export const schemeTransactionId3Schema: Schema<SchemeTransactionId3> = s.of<SchemeTransactionId3>(
  s.union([s.string()]),
);
