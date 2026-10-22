import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A transaction link identifier to associate with this payment method. */
export type TransactionLinkId2 = string;

export const transactionLinkId2Schema: Schema<TransactionLinkId2> = s.of<TransactionLinkId2>(
  s.union([s.string()]),
);
