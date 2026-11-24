import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { overallPercentageSchema, type OverallPercentage } from "./overall-percentage.js";

export type SummaryReportingReportsApi = {
  /** Total number of transactions in the group */
  transactionCount?: number;
  overallPercentage?: OverallPercentage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summaryReportingReportsApiSchema: Schema<SummaryReportingReportsApi> =
  s.object<SummaryReportingReportsApi>(
    {
      transactionCount: s.optional(s.int()),
      overallPercentage: s.optional(s.lazy(() => overallPercentageSchema)),
    },
    { additionalProperties: s.json() },
  );
