import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValidationException1 = {
  /** Errors overview. */
  message: string;
  /** A detailed description of each field that failed validation. */
  errors: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationException1Schema: Schema<ValidationException1> = s.object<ValidationException1>(
  {
    message: s.string(),
    errors: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
