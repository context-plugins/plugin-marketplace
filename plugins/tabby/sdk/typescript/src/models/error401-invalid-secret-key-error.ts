import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error401InvalidSecretKeyError = {
  status?: string;
  errorType?: string;
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error401InvalidSecretKeyErrorSchema: Schema<Error401InvalidSecretKeyError> =
  s.object<Error401InvalidSecretKeyError>(
    {
      status: s.optional(s.string()),
      errorType: s.optional(s.string()),
      error: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
