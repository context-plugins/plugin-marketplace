import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Upfront payment structure for this Savings Plan. */
export const PaymentOption1 = {
  NoUpfront: "no_upfront",
  PartialUpfront: "partial_upfront",
  AllUpfront: "all_upfront",
} as const;
export type PaymentOption1 = (typeof PaymentOption1)[keyof typeof PaymentOption1] | (string & {});

export const paymentOption1Schema: EnumSchema<PaymentOption1> = s.enumOf<PaymentOption1>(PaymentOption1);
