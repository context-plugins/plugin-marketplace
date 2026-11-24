import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runPivotReportResponseSchema, type RunPivotReportResponse } from "./run-pivot-report-response.js";

/** The batch response containing multiple pivot reports. */
export type BatchRunPivotReportsResponse = {
  /** Individual responses. Each response has a separate pivot report request. */
  pivotReports?: RunPivotReportResponse[];
  /**
   * Identifies what kind of resource this message is. This `kind` is always the fixed string
   * "analyticsData#batchRunPivotReports". Useful to distinguish between response types in JSON.
   */
  kind?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchRunPivotReportsResponseSchema: Schema<BatchRunPivotReportsResponse> =
  s.object<BatchRunPivotReportsResponse>(
    {
      pivotReports: s.optional(s.array(s.lazy(() => runPivotReportResponseSchema))),
      kind: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
