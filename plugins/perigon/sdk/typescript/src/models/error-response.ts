import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorResponse = {
  status?: number | null;
  message?: string | null;
  timestamp?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>(
  {
    status: s.optionalNullable(s.int()),
    message: s.optionalNullable(s.string()),
    timestamp: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
