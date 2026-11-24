import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response body */
export type ErrorResponseUiPathTestManagerProjectsApi = {
  /** Human-readable error message */
  message?: string;
  /** Error code identifier */
  errorCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseUiPathTestManagerProjectsApiSchema: Schema<ErrorResponseUiPathTestManagerProjectsApi> =
  s.object<ErrorResponseUiPathTestManagerProjectsApi>(
    {
      message: s.optional(s.string()),
      errorCode: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
