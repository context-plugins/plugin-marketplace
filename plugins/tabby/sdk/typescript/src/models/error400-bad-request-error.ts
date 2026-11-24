import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error400BadRequestError = {
  status?: string;
  errorType?: string;
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error400BadRequestErrorSchema: Schema<Error400BadRequestError> =
  s.object<Error400BadRequestError>(
    {
      status: s.optional(s.string()),
      errorType: s.optional(s.string()),
      error: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
