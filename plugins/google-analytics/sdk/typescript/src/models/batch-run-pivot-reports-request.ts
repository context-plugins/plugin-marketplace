import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runPivotReportRequestSchema, type RunPivotReportRequest } from "./run-pivot-report-request.js";

/** The batch request containing multiple pivot report requests. */
export type BatchRunPivotReportsRequest = {
  /**
   * Individual requests. Each request has a separate pivot report response. Each batch request is
   * allowed up to 5 requests.
   */
  requests?: RunPivotReportRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchRunPivotReportsRequestSchema: Schema<BatchRunPivotReportsRequest> =
  s.object<BatchRunPivotReportsRequest>(
    {
      requests: s.optional(s.array(s.lazy(() => runPivotReportRequestSchema))),
    },
    { additionalProperties: s.json() },
  );
