import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the payout. */
export const PayoutStatus1 = {
  Declined: "declined",
  Failed: "failed",
  Pending: "pending",
  Succeeded: "succeeded",
} as const;
export type PayoutStatus1 = (typeof PayoutStatus1)[keyof typeof PayoutStatus1] | (string & {});

export const payoutStatus1Schema: EnumSchema<PayoutStatus1> = s.enumOf<PayoutStatus1>(PayoutStatus1);
