import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorResponseError = {
  /** HTTP status code */
  statusCode: number;
  /** Error message */
  message: string;
  /** Detailed error messages (optional, only for validation errors) */
  errors?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>(
  {
    statusCode: s.int(),
    message: s.string(),
    errors: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
