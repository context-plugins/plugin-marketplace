import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Validation based on a list of allowed values. */
export type ValueValidation = {
  /** Required. List of allowed values for the parameter. */
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueValidationSchema: Schema<ValueValidation> = s.object<ValueValidation>(
  {
    values: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
