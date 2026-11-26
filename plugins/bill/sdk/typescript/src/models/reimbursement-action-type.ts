import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum representing the type of action to take on a reimbursement. */
export const ReimbursementActionType = {
  Approve: "APPROVE",
  Deny: "DENY",
} as const;
export type ReimbursementActionType =
  | (typeof ReimbursementActionType)[keyof typeof ReimbursementActionType]
  | (string & {});

export const reimbursementActionTypeSchema: EnumSchema<ReimbursementActionType> =
  s.enumOf<ReimbursementActionType>(ReimbursementActionType);
