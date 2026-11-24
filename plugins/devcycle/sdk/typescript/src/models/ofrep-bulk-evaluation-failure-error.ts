import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Bulk evaluation failure response */
export type OfrepBulkEvaluationFailureError = {
  /**
   * An appropriate code specific to the bulk evaluation error. See
   * https://openfeature.dev/specification/types#error-code
   */
  errorCode: string;
  /** Optional error details description for logging or other needs */
  errorDetails?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ofrepBulkEvaluationFailureErrorSchema: Schema<OfrepBulkEvaluationFailureError> =
  s.object<OfrepBulkEvaluationFailureError>(
    {
      errorCode: s.string(),
      errorDetails: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
