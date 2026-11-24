import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Bank account status. */
export const BankAccountStatus = {
  NotVerified: "NOT_VERIFIED",
  Verified: "VERIFIED",
  Pending: "PENDING",
  Blocked: "BLOCKED",
  Expired: "EXPIRED",
  Invalid: "INVALID",
  Undefined: "UNDEFINED",
} as const;
export type BankAccountStatus = (typeof BankAccountStatus)[keyof typeof BankAccountStatus] | (string & {});

export const bankAccountStatusSchema: EnumSchema<BankAccountStatus> =
  s.enumOf<BankAccountStatus>(BankAccountStatus);
