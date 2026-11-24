import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for Risk verification decision. */
export const VerificationDecisionType = {
  Approve: "APPROVE",
  Review: "REVIEW",
  Hold: "HOLD",
  Decline: "DECLINE",
  Pending: "PENDING",
  InProgress: "IN_PROGRESS",
} as const;
export type VerificationDecisionType =
  | (typeof VerificationDecisionType)[keyof typeof VerificationDecisionType]
  | (string & {});

export const verificationDecisionTypeSchema: EnumSchema<VerificationDecisionType> =
  s.enumOf<VerificationDecisionType>(VerificationDecisionType);
