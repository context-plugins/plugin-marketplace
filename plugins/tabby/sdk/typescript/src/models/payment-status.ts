import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status of the current payment:
 * - `CREATED` means that the payment is created successfully, but not finished yet;
 * - `AUTHORIZED` and `CLOSED` mark the successfully approved and captured payments accordingly;
 * - `REJECTED` is returned when a customer is rejected during Tabby Checkout;
 * - `EXPIRED` is used when a customer cancels a payment or when Tabby doesn't receive a
 *   successfully paid transaction after timeout.
 */
export const PaymentStatus = {
  Created: "CREATED",
  Authorized: "AUTHORIZED",
  Closed: "CLOSED",
  Rejected: "REJECTED",
  Expired: "EXPIRED",
} as const;
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus] | (string & {});

export const paymentStatusSchema: EnumSchema<PaymentStatus> = s.enumOf<PaymentStatus>(PaymentStatus);
