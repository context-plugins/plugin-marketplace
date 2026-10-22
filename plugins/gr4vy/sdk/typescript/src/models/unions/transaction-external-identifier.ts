import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The external identifier of the associated transaction. */
export type TransactionExternalIdentifier = string;

export const transactionExternalIdentifierSchema: Schema<TransactionExternalIdentifier> =
  s.of<TransactionExternalIdentifier>(s.union([s.string()]));
