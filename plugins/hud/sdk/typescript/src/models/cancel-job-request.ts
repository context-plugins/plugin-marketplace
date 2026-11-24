import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelJobRequest = {
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelJobRequestSchema: Schema<CancelJobRequest> = s.object<CancelJobRequest>(
  {
    jobId: s.string(),
    _keysMap: {
      jobId: "job_id",
    },
  },
  { additionalProperties: s.json() },
);
