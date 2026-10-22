import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The transaction link identifier stored against this payment method. */
export type TransactionLinkId = string;

export const transactionLinkIdSchema: Schema<TransactionLinkId> = s.of<TransactionLinkId>(
  s.union([s.string()]),
);
