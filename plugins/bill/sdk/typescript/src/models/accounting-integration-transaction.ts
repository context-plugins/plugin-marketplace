import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Spend \& Expense accounting integration transaction information. */
export type AccountingIntegrationTransaction = {
  /** BILL-generated ID of the transaction in your accounting system */
  id?: string;
  /** Set as `true` if the transaction can be billed to a client or customer */
  billable?: boolean;
  /** Unique transaction ID in your accounting system */
  integrationTxId?: string;
  /** Current sync status of the transaction with your accounting system */
  syncStatus?: string;
  /** Message describing the result of the previous sync attempt */
  syncMessage?: string;
  /** Accounting system integration type */
  integrationType?: string;
  /** BILL-generated ID of the accounting system integration */
  integrationId?: string;
  /** Unique ID of the sync request that processed the transaction */
  syncRequestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountingIntegrationTransactionSchema: Schema<AccountingIntegrationTransaction> =
  s.object<AccountingIntegrationTransaction>(
    {
      id: s.optional(s.string()),
      billable: s.optional(s.boolean()),
      integrationTxId: s.optional(s.string()),
      syncStatus: s.optional(s.string()),
      syncMessage: s.optional(s.string()),
      integrationType: s.optional(s.string()),
      integrationId: s.optional(s.string()),
      syncRequestId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
