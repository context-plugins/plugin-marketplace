import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current workspace plan status. */
export const CurrentPlanStatus = {
  Active: "Active",
  Downgraded: "Downgraded",
  Cancelled: "Cancelled",
  NeverSubscribed: "NeverSubscribed",
} as const;
export type CurrentPlanStatus = (typeof CurrentPlanStatus)[keyof typeof CurrentPlanStatus] | (string & {});

export const currentPlanStatusSchema: EnumSchema<CurrentPlanStatus> =
  s.enumOf<CurrentPlanStatus>(CurrentPlanStatus);
