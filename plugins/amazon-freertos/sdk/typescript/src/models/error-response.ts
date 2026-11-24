import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response. */
export type ErrorResponse = {
  message?: string;
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>(
  {
    message: s.optional(s.string()),
    code: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
