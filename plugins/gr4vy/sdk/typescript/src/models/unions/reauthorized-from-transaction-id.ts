import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The identifier of the transaction from which this transaction was reauthorized. */
export type ReauthorizedFromTransactionId = string;

export const reauthorizedFromTransactionIdSchema: Schema<ReauthorizedFromTransactionId> =
  s.of<ReauthorizedFromTransactionId>(s.union([s.string()]));
