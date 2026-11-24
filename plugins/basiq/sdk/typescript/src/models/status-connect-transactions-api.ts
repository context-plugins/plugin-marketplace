import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Identifies if a transaction is pending or posted. A pending transaction is an approved debit or
 * credit transaction that has not been fully processed yet (i.e. has not been posted). Note that
 * pending transactions are not available for all institutions.
 */
export const StatusConnectTransactionsApi = {
  Pending: "pending",
  Posted: "posted",
} as const;
export type StatusConnectTransactionsApi =
  | (typeof StatusConnectTransactionsApi)[keyof typeof StatusConnectTransactionsApi]
  | (string & {});

export const statusConnectTransactionsApiSchema: EnumSchema<StatusConnectTransactionsApi> =
  s.enumOf<StatusConnectTransactionsApi>(StatusConnectTransactionsApi);
