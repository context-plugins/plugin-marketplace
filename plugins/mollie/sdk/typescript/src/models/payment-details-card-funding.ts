import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The card type. */
export const PaymentDetailsCardFunding = {
  Debit: "debit",
  Credit: "credit",
  Prepaid: "prepaid",
  DeferredDebit: "deferred-debit",
} as const;
export type PaymentDetailsCardFunding =
  | (typeof PaymentDetailsCardFunding)[keyof typeof PaymentDetailsCardFunding]
  | (string & {});

export const paymentDetailsCardFundingSchema: EnumSchema<PaymentDetailsCardFunding> =
  s.enumOf<PaymentDetailsCardFunding>(PaymentDetailsCardFunding);
