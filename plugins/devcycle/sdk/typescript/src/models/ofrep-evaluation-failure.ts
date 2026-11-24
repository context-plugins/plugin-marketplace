import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";

/** Flag evaluation failure response */
export type OfrepEvaluationFailure = {
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

const ofrepEvaluationFailureProperties: s.Shape<OfrepEvaluationFailure> = {
  key: s.string(),
  errorCode: errorCodeSchema,
  errorDetails: s.optional(s.string()),
};

export const ofrepEvaluationFailureInternalSchema: Schema<OfrepEvaluationFailure> =
  s.object<OfrepEvaluationFailure>(ofrepEvaluationFailureProperties, { additionalProperties: s.json() });

export const ofrepEvaluationFailureSchema: Schema<OfrepEvaluationFailure> = s.lazySchema(() =>
  s.object<OfrepEvaluationFailure>(
    {
      ...ofrepEvaluationFailureProperties,
      key: s.string().check(s.pattern("^[a-z0-9-_.]+$")),
    },
    { additionalProperties: s.json() },
  ),
);
