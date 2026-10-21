import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentLinkStatus = {
  Active: "active",
  Completed: "completed",
  Expired: "expired",
  Processing: "processing",
} as const;
export type PaymentLinkStatus = (typeof PaymentLinkStatus)[keyof typeof PaymentLinkStatus] | (string & {});

export const paymentLinkStatusSchema: EnumSchema<PaymentLinkStatus> =
  s.enumOf<PaymentLinkStatus>(PaymentLinkStatus);
