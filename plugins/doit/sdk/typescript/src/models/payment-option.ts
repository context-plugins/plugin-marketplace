import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Payment structure for a new or recommended commitment. */
export const PaymentOption = {
  NoUpfront: "no_upfront",
  PartialUpfront: "partial_upfront",
  AllUpfront: "all_upfront",
} as const;
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption] | (string & {});

export const paymentOptionSchema: EnumSchema<PaymentOption> = s.enumOf<PaymentOption>(PaymentOption);
