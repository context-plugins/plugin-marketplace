import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the payment service token. */
export const PaymentMethodStatus2 = {
  Processing: "processing",
  BuyerApprovalRequired: "buyer_approval_required",
  Succeeded: "succeeded",
  Failed: "failed",
  Paused: "paused",
} as const;
export type PaymentMethodStatus2 =
  | (typeof PaymentMethodStatus2)[keyof typeof PaymentMethodStatus2]
  | (string & {});

export const paymentMethodStatus2Schema: EnumSchema<PaymentMethodStatus2> =
  s.enumOf<PaymentMethodStatus2>(PaymentMethodStatus2);
