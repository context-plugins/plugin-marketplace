import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorResponseError = {
  error: string;
  code?: string;
  details?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>(
  {
    error: s.string(),
    code: s.optional(s.string()),
    details: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
