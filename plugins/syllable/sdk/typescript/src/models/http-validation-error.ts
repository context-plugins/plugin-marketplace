import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { validationErrorSchema, type ValidationError } from "./validation-error.js";

export type HttpValidationError = {
  detail?: ValidationError[];
};

export const httpValidationErrorSchema: Schema<HttpValidationError> = s.object<HttpValidationError>({
  detail: s.optional(s.array(s.lazy(() => validationErrorSchema))),
});
