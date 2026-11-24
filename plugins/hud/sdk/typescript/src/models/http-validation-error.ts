import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceSchema, type Source } from "./source.js";
import { validationErrorSchema, type ValidationError } from "./validation-error.js";

export type HttpValidationError = {
  /** @default "validation_error" */
  error?: "validation_error";
  source: Source;
  detail: string;
  errors: ValidationError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const httpValidationErrorSchema: Schema<HttpValidationError> = s.object<HttpValidationError>(
  {
    error: s.defaulted(s.literal("validation_error"), "validation_error"),
    source: sourceSchema,
    detail: s.string(),
    errors: s.array(s.lazy(() => validationErrorSchema)),
  },
  { additionalProperties: s.json() },
);
