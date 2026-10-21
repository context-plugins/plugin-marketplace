import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionStatusSchema, type TransactionStatus } from "../transaction-status.js";

/**
 * Filters the results to only the transactions that have a `status` that matches with any of the
 * provided status values.
 */
export type Status3 = TransactionStatus[];

export const status3Schema: Schema<Status3> = s.of<Status3>(
  s.union([s.array(s.lazy(() => transactionStatusSchema))]),
);
