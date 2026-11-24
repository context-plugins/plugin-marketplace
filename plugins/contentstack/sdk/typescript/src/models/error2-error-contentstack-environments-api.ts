import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response. */
export type Error2ErrorContentstackEnvironmentsApi = {
  /** Human-readable description of the error. */
  message?: string;
  /** Numeric error code. */
  errorCode?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error2ErrorContentstackEnvironmentsApiSchema: Schema<Error2ErrorContentstackEnvironmentsApi> =
  s.object<Error2ErrorContentstackEnvironmentsApi>(
    {
      message: s.optional(s.string()),
      errorCode: s.optional(s.int()),
      _keysMap: {
        errorCode: "error_code",
      },
    },
    { additionalProperties: s.json() },
  );
