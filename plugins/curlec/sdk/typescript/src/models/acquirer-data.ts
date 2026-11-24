import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AcquirerData = {
  /** Bank RRN (Retrieval Reference Number). */
  rrn?: string;
  authenticationReferenceNumber?: string;
  bankTransactionId?: string;
  transactionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const acquirerDataSchema: Schema<AcquirerData> = s.object<AcquirerData>(
  {
    rrn: s.optional(s.string()),
    authenticationReferenceNumber: s.optional(s.string()),
    bankTransactionId: s.optional(s.string()),
    transactionId: s.optional(s.string()),
    _keysMap: {
      authenticationReferenceNumber: "authentication_reference_number",
      bankTransactionId: "bank_transaction_id",
      transactionId: "transaction_id",
    },
  },
  { additionalProperties: s.json() },
);
