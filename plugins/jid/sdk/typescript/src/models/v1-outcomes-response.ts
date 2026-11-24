import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1OutcomesResponse = {
  resultId?: string;
  outcome?: string;
  recordedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1OutcomesResponseSchema: Schema<V1OutcomesResponse> = s.object<V1OutcomesResponse>(
  {
    resultId: s.optional(s.string()),
    outcome: s.optional(s.string()),
    recordedAt: s.optional(s.string()),
    _keysMap: {
      resultId: "result_id",
      recordedAt: "recorded_at",
    },
  },
  { additionalProperties: s.json() },
);
