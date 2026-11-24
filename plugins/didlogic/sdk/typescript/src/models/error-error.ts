import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Standard error response. `errors` maps a field name (or `base` for errors not tied to a specific
 * field) to an array of human-readable messages.
 */
export type ErrorError = {
  errors: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>(
  {
    errors: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
