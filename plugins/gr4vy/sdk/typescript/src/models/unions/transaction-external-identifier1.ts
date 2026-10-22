import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An external identifier that can be used to match the transaction against your own records. */
export type TransactionExternalIdentifier1 = string;

export const transactionExternalIdentifier1Schema: Schema<TransactionExternalIdentifier1> =
  s.of<TransactionExternalIdentifier1>(s.union([s.string()]));
