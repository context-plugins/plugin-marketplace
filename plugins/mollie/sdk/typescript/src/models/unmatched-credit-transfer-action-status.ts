import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UnmatchedCreditTransferActionStatus = {
  Pending: "pending",
} as const;
export type UnmatchedCreditTransferActionStatus =
  | (typeof UnmatchedCreditTransferActionStatus)[keyof typeof UnmatchedCreditTransferActionStatus]
  | (string & {});

export const unmatchedCreditTransferActionStatusSchema: EnumSchema<UnmatchedCreditTransferActionStatus> =
  s.enumOf<UnmatchedCreditTransferActionStatus>(UnmatchedCreditTransferActionStatus);
