import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Set to `archived` to archive this plan, or `active` to restore it. */
export const UpdatePlanRequestStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type UpdatePlanRequestStatus =
  | (typeof UpdatePlanRequestStatus)[keyof typeof UpdatePlanRequestStatus]
  | (string & {});

export const updatePlanRequestStatusSchema: EnumSchema<UpdatePlanRequestStatus> =
  s.enumOf<UpdatePlanRequestStatus>(UpdatePlanRequestStatus);
