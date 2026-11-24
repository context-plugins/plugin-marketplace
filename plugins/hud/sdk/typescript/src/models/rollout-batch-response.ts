import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rolloutResponseSchema, type RolloutResponse } from "./rollout-response.js";

export type RolloutBatchResponse = {
  jobId: string;
  accepted: number;
  rejected: number;
  traces?: RolloutResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rolloutBatchResponseSchema: Schema<RolloutBatchResponse> = s.object<RolloutBatchResponse>(
  {
    jobId: s.string(),
    accepted: s.int(),
    rejected: s.int(),
    traces: s.optional(s.array(s.lazy(() => rolloutResponseSchema))),
    _keysMap: {
      jobId: "job_id",
    },
  },
  { additionalProperties: s.json() },
);
