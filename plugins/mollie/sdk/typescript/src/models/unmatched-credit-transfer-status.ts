import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UnmatchedCreditTransferStatus = {
  Received: "received",
  Matched: "matched",
  Returned: "returned",
  Expired: "expired",
} as const;
export type UnmatchedCreditTransferStatus =
  | (typeof UnmatchedCreditTransferStatus)[keyof typeof UnmatchedCreditTransferStatus]
  | (string & {});

export const unmatchedCreditTransferStatusSchema: EnumSchema<UnmatchedCreditTransferStatus> =
  s.enumOf<UnmatchedCreditTransferStatus>(UnmatchedCreditTransferStatus);
