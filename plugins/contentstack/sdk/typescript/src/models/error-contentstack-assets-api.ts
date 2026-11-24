import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response returned by the API. */
export type ErrorContentstackAssetsApi = {
  /** Human-readable description of the error. */
  errorMessage?: string;
  /** Numeric code identifying the error type. */
  errorCode?: number;
  /** Field-level validation errors when applicable. */
  errors?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorContentstackAssetsApiSchema: Schema<ErrorContentstackAssetsApi> =
  s.object<ErrorContentstackAssetsApi>(
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
