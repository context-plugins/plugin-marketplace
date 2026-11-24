import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { validationErrorSchema, type ValidationError } from "./validation-error.js";

export type HttpValidationErrorError = {
  detail?: ValidationError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const httpValidationErrorErrorSchema: Schema<HttpValidationErrorError> =
  s.object<HttpValidationErrorError>(
    {
      detail: s.optional(s.array(s.lazy(() => validationErrorSchema))),
    },
    { additionalProperties: s.json() },
  );
