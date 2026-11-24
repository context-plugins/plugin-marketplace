import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Card Account response status. */
export const CardAccountStatus = {
  NotVerified: "NOT_VERIFIED",
  Verified: "VERIFIED",
  Pending: "PENDING",
  Blocked: "BLOCKED",
  Expired: "EXPIRED",
  Invalid: "INVALID",
  Undefined: "UNDEFINED",
} as const;
export type CardAccountStatus = (typeof CardAccountStatus)[keyof typeof CardAccountStatus] | (string & {});

export const cardAccountStatusSchema: EnumSchema<CardAccountStatus> =
  s.enumOf<CardAccountStatus>(CardAccountStatus);
