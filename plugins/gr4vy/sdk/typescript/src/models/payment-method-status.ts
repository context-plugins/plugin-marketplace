import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentMethodStatus = {
  Processing: "processing",
  BuyerApprovalRequired: "buyer_approval_required",
  Succeeded: "succeeded",
  Failed: "failed",
  Paused: "paused",
} as const;
export type PaymentMethodStatus =
  | (typeof PaymentMethodStatus)[keyof typeof PaymentMethodStatus]
  | (string & {});

export const paymentMethodStatusSchema: EnumSchema<PaymentMethodStatus> =
  s.enumOf<PaymentMethodStatus>(PaymentMethodStatus);
