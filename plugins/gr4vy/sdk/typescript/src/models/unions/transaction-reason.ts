import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TransactionReason = string;

export const transactionReasonSchema: Schema<TransactionReason> = s.of<TransactionReason>(
  s.union([s.string()]),
);
