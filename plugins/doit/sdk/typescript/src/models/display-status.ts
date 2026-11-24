import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The display status of the insight. */
export const DisplayStatus = {
  Actionable: "actionable",
  Acknowledged: "acknowledged",
  Optimized: "optimized",
  Dismissed: "dismissed",
  InProgress: "in progress",
  UpgradeNeeded: "upgrade needed",
  PermissionsNeeded: "permissions needed",
} as const;
export type DisplayStatus = (typeof DisplayStatus)[keyof typeof DisplayStatus] | (string & {});

export const displayStatusSchema: EnumSchema<DisplayStatus> = s.enumOf<DisplayStatus>(DisplayStatus);
