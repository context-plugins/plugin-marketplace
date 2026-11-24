import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines the level of strictness when validating mocked results against their respective API
 * models. Values include: STRICT: All required fields must be present, and all present fields must
 * conform to the API's schema. PRESENT: All present fields must conform to the API's schema. NONE:
 * No validation is performed. If no value is specified, the default value is STRICT.
 */
export const FieldValidationMode = {
  Strict: "STRICT",
  Present: "PRESENT",
  None: "NONE",
} as const;
export type FieldValidationMode =
  | (typeof FieldValidationMode)[keyof typeof FieldValidationMode]
  | (string & {});

export const fieldValidationModeSchema: EnumSchema<FieldValidationMode> =
  s.enumOf<FieldValidationMode>(FieldValidationMode);
