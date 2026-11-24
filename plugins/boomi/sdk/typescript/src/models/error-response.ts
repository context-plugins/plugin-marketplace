import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response from the Boomi Platform API. */
export type ErrorResponse = {
  /** Human-readable error message. */
  message?: string;
  /** Numeric error code. */
  code?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>(
  {
    message: s.optional(s.string()),
    code: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
