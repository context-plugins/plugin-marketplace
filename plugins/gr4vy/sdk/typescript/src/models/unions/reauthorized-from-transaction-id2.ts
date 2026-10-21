import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for transactions that were reauthorized from the transaction with the provided ID. */
export type ReauthorizedFromTransactionId2 = string;

export const reauthorizedFromTransactionId2Schema: Schema<ReauthorizedFromTransactionId2> =
  s.of<ReauthorizedFromTransactionId2>(s.union([s.string()]));
