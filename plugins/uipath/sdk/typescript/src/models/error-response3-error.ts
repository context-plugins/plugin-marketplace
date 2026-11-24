import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response body */
export type ErrorResponse3Error = {
  /** Human-readable error message */
  message?: string;
  /** Error code identifier */
  errorCode?: string;
  /** Trace identifier for support and debugging */
  traceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponse3ErrorSchema: Schema<ErrorResponse3Error> = s.object<ErrorResponse3Error>(
  {
    message: s.optional(s.string()),
    errorCode: s.optional(s.string()),
    traceId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
