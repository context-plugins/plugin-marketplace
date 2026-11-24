import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status code of the compute fleet. Valid values include: CREATING: The compute fleet is being
 * created. UPDATING: The compute fleet is being updated. ROTATING: The compute fleet is being
 * rotated. PENDING_DELETION: The compute fleet is pending deletion. DELETING: The compute fleet is
 * being deleted. CREATE_FAILED: The compute fleet has failed to create. UPDATE_ROLLBACK_FAILED: The
 * compute fleet has failed to update and could not rollback to previous state. ACTIVE: The compute
 * fleet has succeeded and is active.
 */
export const StatusCode = {
  Creating: "CREATING",
  Updating: "UPDATING",
  Rotating: "ROTATING",
  PendingDeletion: "PENDING_DELETION",
  Deleting: "DELETING",
  CreateFailed: "CREATE_FAILED",
  UpdateRollbackFailed: "UPDATE_ROLLBACK_FAILED",
  Active: "ACTIVE",
} as const;
export type StatusCode = (typeof StatusCode)[keyof typeof StatusCode] | (string & {});

export const statusCodeSchema: EnumSchema<StatusCode> = s.enumOf<StatusCode>(StatusCode);
