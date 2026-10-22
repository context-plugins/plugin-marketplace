import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnmatchedCreditTransferMatchRequest = {
  /** The IDs of the payments to match against the unmatched credit transfer. */
  paymentIds: string[];
};

export const unmatchedCreditTransferMatchRequestSchema: Schema<UnmatchedCreditTransferMatchRequest> =
  s.object<UnmatchedCreditTransferMatchRequest>({
    paymentIds: s.array(s.string()),
  });
