import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the payment method. */
export const PaymentMethodStatus3 = {
  Processing: "processing",
  BuyerApprovalRequired: "buyer_approval_required",
  Succeeded: "succeeded",
  Failed: "failed",
  Paused: "paused",
} as const;
export type PaymentMethodStatus3 =
  | (typeof PaymentMethodStatus3)[keyof typeof PaymentMethodStatus3]
  | (string & {});

export const paymentMethodStatus3Schema: EnumSchema<PaymentMethodStatus3> =
  s.enumOf<PaymentMethodStatus3>(PaymentMethodStatus3);
