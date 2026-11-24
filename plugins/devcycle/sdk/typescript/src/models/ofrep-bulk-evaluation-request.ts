import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Evaluate multiple flags in one request */
export type OfrepBulkEvaluationRequest = {
  /** Context information for flag evaluation */
  context?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ofrepBulkEvaluationRequestSchema: Schema<OfrepBulkEvaluationRequest> =
  s.object<OfrepBulkEvaluationRequest>(
    {
      context: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
