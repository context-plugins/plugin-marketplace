import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Payment structure for projected purchases. May be null when not set on the stored projection. */
export const PaymentOption3 = {
  NoUpfront: "no_upfront",
  PartialUpfront: "partial_upfront",
  AllUpfront: "all_upfront",
} as const;
export type PaymentOption3 = (typeof PaymentOption3)[keyof typeof PaymentOption3] | (string & {});

export const paymentOption3Schema: EnumSchema<PaymentOption3> = s.enumOf<PaymentOption3>(PaymentOption3);
