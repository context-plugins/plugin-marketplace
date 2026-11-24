import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Identifies if a transaction is pending or posted. A pending transaction is an approved debit or
 * credit transaction that has not been fully processed yet (i.e. has not been posted). Find out
 * more about pending transaction and how to deal with them within your app. Note that pending
 * transactions are not available for all institutions.
 */
export const StatusReportingReportsApi = {
  Pending: "pending",
  Posted: "posted",
} as const;
export type StatusReportingReportsApi =
  | (typeof StatusReportingReportsApi)[keyof typeof StatusReportingReportsApi]
  | (string & {});

export const statusReportingReportsApiSchema: EnumSchema<StatusReportingReportsApi> =
  s.enumOf<StatusReportingReportsApi>(StatusReportingReportsApi);
