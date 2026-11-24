import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Validation based on regular expressions. */
export type RegexValidation = {
  /**
   * Required. RE2 regular expressions used to validate the parameter's value. The value must match
   * the regex in its entirety (substring matches are not sufficient).
   */
  regexes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const regexValidationSchema: Schema<RegexValidation> = s.object<RegexValidation>(
  {
    regexes: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
