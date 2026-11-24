import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current activation status. Progresses from requested → under_review → activated.
 * needs_clarification requires additional info from the merchant.
 */
export const ActivationStatus = {
  Requested: "requested",
  NeedsClarification: "needs_clarification",
  UnderReview: "under_review",
  Activated: "activated",
  Suspended: "suspended",
} as const;
export type ActivationStatus = (typeof ActivationStatus)[keyof typeof ActivationStatus] | (string & {});

export const activationStatusSchema: EnumSchema<ActivationStatus> =
  s.enumOf<ActivationStatus>(ActivationStatus);
