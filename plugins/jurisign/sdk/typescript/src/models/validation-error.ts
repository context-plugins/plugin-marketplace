import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValidationError = {
  message?: string;
  errors?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationErrorSchema: Schema<ValidationError> = s.object<ValidationError>(
  {
    message: s.optional(s.string()),
    errors: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
