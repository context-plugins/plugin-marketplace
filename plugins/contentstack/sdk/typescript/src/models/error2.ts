import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response. */
export type Error2 = {
  /** Human-readable description of the error. */
  errorMessage?: string;
  /** Numeric error code. */
  errorCode?: number;
  /** Field-level validation errors. */
  errors?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error2Schema: Schema<Error2> = s.object<Error2>(
  {
    errorMessage: s.optional(s.string()),
    errorCode: s.optional(s.int()),
    errors: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      errorMessage: "error_message",
      errorCode: "error_code",
    },
  },
  { additionalProperties: s.json() },
);
