import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the refund. */
export const RefundStatus2 = {
  Processing: "processing",
  Succeeded: "succeeded",
  Failed: "failed",
  Declined: "declined",
  Voided: "voided",
} as const;
export type RefundStatus2 = (typeof RefundStatus2)[keyof typeof RefundStatus2] | (string & {});

export const refundStatus2Schema: EnumSchema<RefundStatus2> = s.enumOf<RefundStatus2>(RefundStatus2);
