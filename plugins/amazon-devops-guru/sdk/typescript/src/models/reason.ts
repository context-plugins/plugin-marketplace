import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The reason the validation exception was thrown. */
export const Reason = {
  UnknownOperation: "UNKNOWN_OPERATION",
  CannotParse: "CANNOT_PARSE",
  FieldValidationFailed: "FIELD_VALIDATION_FAILED",
  Other: "OTHER",
  InvalidParameterCombination: "INVALID_PARAMETER_COMBINATION",
  ParameterInconsistentWithServiceState: "PARAMETER_INCONSISTENT_WITH_SERVICE_STATE",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
