import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type ValidationErrorError = {
  success?: boolean;
  error?: Error3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationErrorErrorSchema: Schema<ValidationErrorError> = s.object<ValidationErrorError>(
  {
    success: s.optional(s.boolean()),
    error: s.optional(s.lazy(() => error3Schema)),
  },
  { additionalProperties: s.json() },
);
