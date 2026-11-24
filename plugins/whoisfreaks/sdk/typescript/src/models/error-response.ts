import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Error response. `status` may be an integer (e.g. 401), boolean, or string depending on the
 * endpoint, so it is intentionally untyped to avoid deserialization failures.
 */
export type ErrorResponse = {
  timestamp?: string;
  path?: string;
  status?: Record<string, unknown>;
  error?: string;
  message?: string;
  code?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>(
  {
    timestamp: s.optional(s.string()),
    path: s.optional(s.string()),
    status: s.optional(s.record(s.string(), s.unknown())),
    error: s.optional(s.string()),
    message: s.optional(s.string()),
    code: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
