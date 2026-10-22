import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutStatus = {
  Declined: "declined",
  Failed: "failed",
  Pending: "pending",
  Succeeded: "succeeded",
} as const;
export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus] | (string & {});

export const payoutStatusSchema: EnumSchema<PayoutStatus> = s.enumOf<PayoutStatus>(PayoutStatus);
