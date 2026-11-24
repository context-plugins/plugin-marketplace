import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RolloutResponse = {
  jobId: string;
  traceId: string;
  /** @default "queued" */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rolloutResponseSchema: Schema<RolloutResponse> = s.object<RolloutResponse>(
  {
    jobId: s.string(),
    traceId: s.string(),
    status: s.defaulted(s.string(), "queued"),
    _keysMap: {
      jobId: "job_id",
      traceId: "trace_id",
    },
  },
  { additionalProperties: s.json() },
);
