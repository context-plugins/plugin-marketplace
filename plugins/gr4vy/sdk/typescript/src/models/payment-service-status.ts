import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentServiceStatus = {
  Pending: "pending",
  Created: "created",
  Failed: "failed",
} as const;
export type PaymentServiceStatus =
  | (typeof PaymentServiceStatus)[keyof typeof PaymentServiceStatus]
  | (string & {});

export const paymentServiceStatusSchema: EnumSchema<PaymentServiceStatus> =
  s.enumOf<PaymentServiceStatus>(PaymentServiceStatus);
