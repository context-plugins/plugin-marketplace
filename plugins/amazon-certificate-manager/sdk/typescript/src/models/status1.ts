import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by certificate status. */
export const Status1 = {
  PendingValidation: "PENDING_VALIDATION",
  Issued: "ISSUED",
  Inactive: "INACTIVE",
  Expired: "EXPIRED",
  ValidationTimedOut: "VALIDATION_TIMED_OUT",
  Revoked: "REVOKED",
  Failed: "FAILED",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
