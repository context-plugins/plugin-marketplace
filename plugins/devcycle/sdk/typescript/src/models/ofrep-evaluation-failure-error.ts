import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";

/** Flag evaluation failure response */
export type OfrepEvaluationFailureError = {
  /** Feature flag key */
  key: string;
  /**
   * OpenFeature compatible error code. See https://openfeature.dev/specification/types#error-code
   */
  errorCode: ErrorCode;
  /** An error description for logging or other needs */
  errorDetails?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ofrepEvaluationFailureErrorProperties: s.Shape<OfrepEvaluationFailureError> = {
  key: s.string(),
  errorCode: errorCodeSchema,
  errorDetails: s.optional(s.string()),
};

export const ofrepEvaluationFailureErrorInternalSchema: Schema<OfrepEvaluationFailureError> =
  s.object<OfrepEvaluationFailureError>(ofrepEvaluationFailureErrorProperties, {
    additionalProperties: s.json(),
  });

export const ofrepEvaluationFailureErrorSchema: Schema<OfrepEvaluationFailureError> = s.lazySchema(() =>
  s.object<OfrepEvaluationFailureError>(
    {
      ...ofrepEvaluationFailureErrorProperties,
      key: s.string().check(s.pattern("^[a-z0-9-_.]+$")),
    },
    { additionalProperties: s.json() },
  ),
);
