import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Dispute status enum for Spend \& Expense Transactions. */
export const DisputeStatusType = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  ClosedWon: "CLOSED_WON",
  ClosedLost: "CLOSED_LOST",
} as const;
export type DisputeStatusType = (typeof DisputeStatusType)[keyof typeof DisputeStatusType] | (string & {});

export const disputeStatusTypeSchema: EnumSchema<DisputeStatusType> =
  s.enumOf<DisputeStatusType>(DisputeStatusType);
