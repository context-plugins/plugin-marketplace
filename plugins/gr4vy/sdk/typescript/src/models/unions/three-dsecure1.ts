import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionThreeDSecureSummarySchema,
  type TransactionThreeDSecureSummary,
} from "../transaction-three-dsecure-summary.js";

/** The 3-D Secure data that was sent to the payment service for the transaction. */
export type ThreeDSecure1 = TransactionThreeDSecureSummary;

export const threeDSecure1Schema: Schema<ThreeDSecure1> = s.of<ThreeDSecure1>(
  s.union([s.lazy(() => transactionThreeDSecureSummarySchema)]),
);
