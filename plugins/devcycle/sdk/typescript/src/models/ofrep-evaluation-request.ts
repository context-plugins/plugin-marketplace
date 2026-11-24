import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Flag evaluation request */
export type OfrepEvaluationRequest = {
  /** Context information for flag evaluation */
  context?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ofrepEvaluationRequestSchema: Schema<OfrepEvaluationRequest> = s.object<OfrepEvaluationRequest>(
  {
    context: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
