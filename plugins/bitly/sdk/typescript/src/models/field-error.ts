import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FieldError = {
  field?: string;
  errorCode?: string;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fieldErrorSchema: Schema<FieldError> = s.object<FieldError>(
  {
    field: s.optional(s.string()),
    errorCode: s.optional(s.string()),
    message: s.optional(s.string()),
    _keysMap: {
      errorCode: "error_code",
    },
  },
  { additionalProperties: s.json() },
);
