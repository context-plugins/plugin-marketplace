import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorError = {
  /** A human-readable error message. */
  error?: string;
  /** The HTTP status code. */
  status?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>(
  {
    error: s.optional(s.string()),
    status: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
