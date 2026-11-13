import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { validationErrorSchema, type ValidationError } from "./validation-error.js";

export type HttpValidationError = {
  detail?: ValidationError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const httpValidationErrorSchema: Schema<HttpValidationError> = s.object<HttpValidationError>(
  {
    detail: s.optional(s.array(s.lazy(() => validationErrorSchema))),
  },
  { additionalProperties: s.json() },
);
