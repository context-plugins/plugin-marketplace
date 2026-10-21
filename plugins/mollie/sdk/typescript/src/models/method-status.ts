import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The payment method's activation status for this profile. */
export const MethodStatus = {
  Activated: "activated",
  PendingBoarding: "pending-boarding",
  PendingReview: "pending-review",
  PendingExternal: "pending-external",
  Rejected: "rejected",
} as const;
export type MethodStatus = (typeof MethodStatus)[keyof typeof MethodStatus] | (string & {});

export const methodStatusSchema: EnumSchema<MethodStatus> = s.enumOf<MethodStatus>(MethodStatus);
