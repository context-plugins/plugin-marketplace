import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { traceStatusSchema, type TraceStatus } from "./trace-status.js";

export type JobImportTraceResultResponse = {
  traceId: string;
  status: TraceStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobImportTraceResultResponseSchema: Schema<JobImportTraceResultResponse> =
  s.object<JobImportTraceResultResponse>(
    {
      traceId: s.string(),
      status: traceStatusSchema,
      _keysMap: {
        traceId: "trace_id",
      },
    },
    { additionalProperties: s.json() },
  );
