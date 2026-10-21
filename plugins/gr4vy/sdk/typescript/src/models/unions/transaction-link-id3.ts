import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A transaction link identifier for the transaction used by the scheme itself, when available. */
export type TransactionLinkId3 = string;

export const transactionLinkId3Schema: Schema<TransactionLinkId3> = s.of<TransactionLinkId3>(
  s.union([s.string()]),
);
