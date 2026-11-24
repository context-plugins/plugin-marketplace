import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response body */
export type ErrorResponse = {
  /** Human-readable error message */
  message?: string;
  /** Numeric error code */
  errorCode?: number;
  /** Trace identifier for support and debugging */
  traceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>(
  {
    message: s.optional(s.string()),
    errorCode: s.optional(s.int()),
    traceId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
