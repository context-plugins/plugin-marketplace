import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Identifies the status of an association. PROCESSING: The API association is being created. You
 * cannot modify association requests during processing. SUCCESS: The API association was
 * successful. You can modify associations after success. FAILED: The API association has failed.
 * You can modify associations after failure.
 */
export const AssociationStatus = {
  Processing: "PROCESSING",
  Failed: "FAILED",
  Success: "SUCCESS",
} as const;
export type AssociationStatus = (typeof AssociationStatus)[keyof typeof AssociationStatus] | (string & {});

export const associationStatusSchema: EnumSchema<AssociationStatus> =
  s.enumOf<AssociationStatus>(AssociationStatus);
