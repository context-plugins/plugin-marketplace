import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  /** Stable machine-readable code, e.g. `invalid_from_number`. */
  error: string;
  /** Human-readable explanation. */
  message: string;
  /** Whether retrying the identical request could succeed. */
  retryable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    error: s.string(),
    message: s.string(),
    retryable: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
