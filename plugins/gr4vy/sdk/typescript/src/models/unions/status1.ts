import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionStatusSchema, type TransactionStatus } from "../transaction-status.js";

/**
 * The status of the transaction for the `payment_method`. The status may change over time as
 * asynchronous processing events occur.
 */
export type Status1 = TransactionStatus;

export const status1Schema: Schema<Status1> = s.of<Status1>(s.union([s.lazy(() => transactionStatusSchema)]));
