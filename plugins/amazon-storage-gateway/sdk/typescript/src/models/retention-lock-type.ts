import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Tape retention lock can be configured in two modes. When configured in governance mode, Amazon
 * Web Services accounts with specific IAM permissions are authorized to remove the tape retention
 * lock from archived virtual tapes. When configured in compliance mode, the tape retention lock
 * cannot be removed by any user, including the root Amazon Web Services account.
 */
export const RetentionLockType = {
  Compliance: "COMPLIANCE",
  Governance: "GOVERNANCE",
  None: "NONE",
} as const;
export type RetentionLockType = (typeof RetentionLockType)[keyof typeof RetentionLockType] | (string & {});

export const retentionLockTypeSchema: EnumSchema<RetentionLockType> =
  s.enumOf<RetentionLockType>(RetentionLockType);
