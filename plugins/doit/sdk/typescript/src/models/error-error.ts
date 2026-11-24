import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response structure. */
export type ErrorError = {
  /** Detailed error message. */
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>(
  {
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
