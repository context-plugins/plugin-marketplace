import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { traceStatusSchema, type TraceStatus } from "./trace-status.js";

export type JobImportTraceResponse = {
  externalId: string;
  traceId: string;
  taskVersionId: string;
  status: TraceStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobImportTraceResponseSchema: Schema<JobImportTraceResponse> = s.object<JobImportTraceResponse>(
  {
    externalId: s.string(),
    traceId: s.string(),
    taskVersionId: s.string(),
    status: traceStatusSchema,
    _keysMap: {
      externalId: "external_id",
      traceId: "trace_id",
      taskVersionId: "task_version_id",
    },
  },
  { additionalProperties: s.json() },
);
