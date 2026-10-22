import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the payout. */
export const PayoutStatus = {
  Requested: "requested",
  Initiated: "initiated",
  ProcessingAtBank: "processing-at-bank",
  Completed: "completed",
  Failed: "failed",
  Canceled: "canceled",
} as const;
export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus] | (string & {});

export const payoutStatusSchema: EnumSchema<PayoutStatus> = s.enumOf<PayoutStatus>(PayoutStatus);
