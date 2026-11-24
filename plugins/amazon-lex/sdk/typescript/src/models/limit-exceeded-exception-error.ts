import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LimitExceededExceptionError = {
  retryAfterSeconds?: string;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const limitExceededExceptionErrorSchema: Schema<LimitExceededExceptionError> =
  s.object<LimitExceededExceptionError>(
    {
      retryAfterSeconds: s.optional(s.string()),
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
