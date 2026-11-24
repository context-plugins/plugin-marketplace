import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response. */
export type ErrorErrorContentstackEnvironmentsApi = {
  /** Human-readable description of the error. */
  errorMessage?: string;
  /** Numeric error code. */
  errorCode?: number;
  /** Field-level validation errors. */
  errors?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorErrorContentstackEnvironmentsApiSchema: Schema<ErrorErrorContentstackEnvironmentsApi> =
  s.object<ErrorErrorContentstackEnvironmentsApi>(
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
