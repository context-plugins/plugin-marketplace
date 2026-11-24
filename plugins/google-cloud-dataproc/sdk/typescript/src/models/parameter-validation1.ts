import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { regexValidationSchema, type RegexValidation } from "./regex-validation.js";
import { valueValidationSchema, type ValueValidation } from "./value-validation.js";

/** Optional. Validation rules to be applied to this parameter's value. */
export type ParameterValidation1 = {
  /** Validation based on a list of allowed values. */
  values?: ValueValidation;
  /** Validation based on regular expressions. */
  regex?: RegexValidation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const parameterValidation1Schema: Schema<ParameterValidation1> = s.object<ParameterValidation1>(
  {
    values: s.optional(s.lazy(() => valueValidationSchema)),
    regex: s.optional(s.lazy(() => regexValidationSchema)),
  },
  { additionalProperties: s.json() },
);
