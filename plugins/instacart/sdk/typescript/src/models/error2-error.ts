import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error2Error = {
  /** A human-readable error message describing what went wrong. */
  error?: string;
  /** The HTTP status code of the error response. */
  status?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error2ErrorSchema: Schema<Error2Error> = s.object<Error2Error>(
  {
    error: s.optional(s.string()),
    status: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
