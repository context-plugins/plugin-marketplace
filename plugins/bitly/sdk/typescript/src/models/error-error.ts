import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldErrorSchema, type FieldError } from "./field-error.js";

export type ErrorError = {
  message?: string;
  description?: string;
  resource?: string;
  errors?: FieldError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>(
  {
    message: s.optional(s.string()),
    description: s.optional(s.string()),
    resource: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => fieldErrorSchema))),
  },
  { additionalProperties: s.json() },
);
