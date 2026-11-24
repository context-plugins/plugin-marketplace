import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValidationError1 = {
  message?: string;
  errors?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationError1Schema: Schema<ValidationError1> = s.object<ValidationError1>(
  {
    message: s.optional(s.string()),
    errors: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
