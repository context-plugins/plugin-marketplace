import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runReportResponseSchema, type RunReportResponse } from "./run-report-response.js";

/** The batch response containing multiple reports. */
export type BatchRunReportsResponse = {
  /** Individual responses. Each response has a separate report request. */
  reports?: RunReportResponse[];
  /**
   * Identifies what kind of resource this message is. This `kind` is always the fixed string
   * "analyticsData#batchRunReports". Useful to distinguish between response types in JSON.
   */
  kind?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchRunReportsResponseSchema: Schema<BatchRunReportsResponse> =
  s.object<BatchRunReportsResponse>(
    {
      reports: s.optional(s.array(s.lazy(() => runReportResponseSchema))),
      kind: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
