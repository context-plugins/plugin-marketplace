import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MaxCancelResponse = {
  jobId: string;
  status: string;
  cancelRequested: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const maxCancelResponseSchema: Schema<MaxCancelResponse> = s.object<MaxCancelResponse>(
  {
    jobId: s.string(),
    status: s.string(),
    cancelRequested: s.boolean(),
  },
  { additionalProperties: s.json() },
);
