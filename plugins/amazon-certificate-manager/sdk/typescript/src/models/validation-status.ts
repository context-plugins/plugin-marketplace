import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The validation status of the domain name. This can be one of the following values:
 * PENDING_VALIDATION SUCCESS FAILED
 */
export const ValidationStatus = {
  PendingValidation: "PENDING_VALIDATION",
  Success: "SUCCESS",
  Failed: "FAILED",
} as const;
export type ValidationStatus = (typeof ValidationStatus)[keyof typeof ValidationStatus] | (string & {});

export const validationStatusSchema: EnumSchema<ValidationStatus> =
  s.enumOf<ValidationStatus>(ValidationStatus);
