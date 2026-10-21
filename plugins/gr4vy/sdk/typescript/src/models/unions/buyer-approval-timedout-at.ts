import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date this transaction's approval timed out at. */
export type BuyerApprovalTimedoutAt = Date;

export const buyerApprovalTimedoutAtSchema: Schema<BuyerApprovalTimedoutAt> = s.of<BuyerApprovalTimedoutAt>(
  s.union([s.dateTime()]),
);
