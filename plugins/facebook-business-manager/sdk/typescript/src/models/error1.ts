import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error1 = {
  /** Human-readable error message */
  message?: string;
  /** Error type classification */
  type?: string;
  /** Numeric error code */
  code?: number;
  /** Numeric error subcode for more specific categorization */
  errorSubcode?: number;
  /** Unique trace ID for debugging with Facebook support */
  fbtraceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error1Schema: Schema<Error1> = s.object<Error1>(
  {
    message: s.optional(s.string()),
    type: s.optional(s.string()),
    code: s.optional(s.int()),
    errorSubcode: s.optional(s.int()),
    fbtraceId: s.optional(s.string()),
    _keysMap: {
      errorSubcode: "error_subcode",
      fbtraceId: "fbtrace_id",
    },
  },
  { additionalProperties: s.json() },
);
