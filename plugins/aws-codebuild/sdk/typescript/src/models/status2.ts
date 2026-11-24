import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the webhook. Valid values include: CREATING: The webhook is being created.
 * CREATE_FAILED: The webhook has failed to create. ACTIVE: The webhook has succeeded and is active.
 * DELETING: The webhook is being deleted.
 */
export const Status2 = {
  Creating: "CREATING",
  CreateFailed: "CREATE_FAILED",
  Active: "ACTIVE",
  Deleting: "DELETING",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
