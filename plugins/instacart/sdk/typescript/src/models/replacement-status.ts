import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The customer's decision on the replacement, if one was suggested. */
export const ReplacementStatus = {
  Pending: "PENDING",
  Approved: "APPROVED",
  Rejected: "REJECTED",
} as const;
export type ReplacementStatus = (typeof ReplacementStatus)[keyof typeof ReplacementStatus] | (string & {});

export const replacementStatusSchema: EnumSchema<ReplacementStatus> =
  s.enumOf<ReplacementStatus>(ReplacementStatus);
