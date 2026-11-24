import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status = {
  Trialing: "trialing",
  Active: "active",
  PastDue: "past_due",
  Expired: "expired",
  TrialExpired: "trial_expired",
  None: "none",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
