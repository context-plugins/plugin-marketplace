import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the payment link. */
export const PaymentLinkStatus2 = {
  Active: "active",
  Completed: "completed",
  Expired: "expired",
  Processing: "processing",
} as const;
export type PaymentLinkStatus2 = (typeof PaymentLinkStatus2)[keyof typeof PaymentLinkStatus2] | (string & {});

export const paymentLinkStatus2Schema: EnumSchema<PaymentLinkStatus2> =
  s.enumOf<PaymentLinkStatus2>(PaymentLinkStatus2);
