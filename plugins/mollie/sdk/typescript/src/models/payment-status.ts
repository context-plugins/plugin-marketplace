import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The payment's status. Refer to the [documentation regarding
 * statuses](https://docs.mollie.com/docs/handling-payment-status) for more info about which
 * statuses occur at what point.
 */
export const PaymentStatus = {
  Open: "open",
  Pending: "pending",
  Authorized: "authorized",
  Paid: "paid",
  Canceled: "canceled",
  Expired: "expired",
  Failed: "failed",
} as const;
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus] | (string & {});

export const paymentStatusSchema: EnumSchema<PaymentStatus> = s.enumOf<PaymentStatus>(PaymentStatus);
