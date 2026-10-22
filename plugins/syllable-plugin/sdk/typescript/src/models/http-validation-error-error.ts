import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { validationErrorSchema, type ValidationError } from "./validation-error.js";

export type HttpValidationErrorError = {
  detail?: ValidationError[];
};

export const httpValidationErrorErrorSchema: Schema<HttpValidationErrorError> =
  s.object<HttpValidationErrorError>({
    detail: s.optional(s.array(s.lazy(() => validationErrorSchema))),
  });
