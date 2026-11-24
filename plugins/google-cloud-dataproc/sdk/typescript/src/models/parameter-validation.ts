import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { regexValidationSchema, type RegexValidation } from "./regex-validation.js";
import { valueValidationSchema, type ValueValidation } from "./value-validation.js";

/** Configuration for parameter validation. */
export type ParameterValidation = {
  /** Validation based on a list of allowed values. */
  values?: ValueValidation;
  /** Validation based on regular expressions. */
  regex?: RegexValidation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const parameterValidationSchema: Schema<ParameterValidation> = s.object<ParameterValidation>(
  {
    values: s.optional(s.lazy(() => valueValidationSchema)),
    regex: s.optional(s.lazy(() => regexValidationSchema)),
  },
  { additionalProperties: s.json() },
);
