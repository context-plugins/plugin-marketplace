import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConflictErrorResponseError = {
  /** Response status code */
  statusCode: number;
  /** Error details */
  message: Record<string, unknown>;
  /** Error type */
  error: string;
  errorType: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conflictErrorResponseErrorSchema: Schema<ConflictErrorResponseError> =
  s.object<ConflictErrorResponseError>(
    {
      statusCode: s.float64(),
      message: s.record(s.string(), s.unknown()),
      error: s.string(),
      errorType: s.string(),
    },
    { additionalProperties: s.json() },
  );
