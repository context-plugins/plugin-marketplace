import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Additional information about a compute fleet. Valid values include: CREATE_FAILED: The compute
 * fleet has failed to create. UPDATE_FAILED: The compute fleet has failed to update.
 */
export const Context = {
  CreateFailed: "CREATE_FAILED",
  UpdateFailed: "UPDATE_FAILED",
  ActionRequired: "ACTION_REQUIRED",
  PendingDeletion: "PENDING_DELETION",
  InsufficientCapacity: "INSUFFICIENT_CAPACITY",
} as const;
export type Context = (typeof Context)[keyof typeof Context] | (string & {});

export const contextSchema: EnumSchema<Context> = s.enumOf<Context>(Context);
