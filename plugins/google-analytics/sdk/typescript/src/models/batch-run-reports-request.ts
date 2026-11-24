import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runReportRequestSchema, type RunReportRequest } from "./run-report-request.js";

/** The batch request containing multiple report requests. */
export type BatchRunReportsRequest = {
  /**
   * Individual requests. Each request has a separate report response. Each batch request is allowed
   * up to 5 requests.
   */
  requests?: RunReportRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchRunReportsRequestSchema: Schema<BatchRunReportsRequest> = s.object<BatchRunReportsRequest>(
  {
    requests: s.optional(s.array(s.lazy(() => runReportRequestSchema))),
  },
  { additionalProperties: s.json() },
);
