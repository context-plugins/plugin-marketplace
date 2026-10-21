import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the unmatched credit transfer. */
export const UnmatchedCreditTransferStatus1 = {
  Received: "received",
  Matched: "matched",
  Returned: "returned",
  Expired: "expired",
} as const;
export type UnmatchedCreditTransferStatus1 =
  | (typeof UnmatchedCreditTransferStatus1)[keyof typeof UnmatchedCreditTransferStatus1]
  | (string & {});

export const unmatchedCreditTransferStatus1Schema: EnumSchema<UnmatchedCreditTransferStatus1> =
  s.enumOf<UnmatchedCreditTransferStatus1>(UnmatchedCreditTransferStatus1);
