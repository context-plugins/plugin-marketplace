import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TransactionIntervalReportingReportsApi = {
  /** Start date of the transaction interval */
  from?: string;
  /** End date of the transaction interval */
  to?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionIntervalReportingReportsApiSchema: Schema<TransactionIntervalReportingReportsApi> =
  s.object<TransactionIntervalReportingReportsApi>(
    {
      from: s.optional(s.dateOnly()),
      to: s.optional(s.dateOnly()),
    },
    { additionalProperties: s.json() },
  );
