import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The enum Payment status dto. */
export const PaymentStatus = {
  Approving: "APPROVING",
  Scheduled: "SCHEDULED",
  Paid: "PAID",
  Cancelled: "CANCELLED",
  Void: "VOID",
  Escheated: "ESCHEATED",
  Undefined: "UNDEFINED",
} as const;
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus] | (string & {});

export const paymentStatusSchema: EnumSchema<PaymentStatus> = s.enumOf<PaymentStatus>(PaymentStatus);
