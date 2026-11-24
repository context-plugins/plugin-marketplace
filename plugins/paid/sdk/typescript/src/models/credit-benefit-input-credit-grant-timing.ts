import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditBenefitInputCreditGrantTiming = {
  OnOrderActivation: "on_order_activation",
  OnPayment: "on_payment",
  OnInvoicePosted: "on_invoice_posted",
} as const;
export type CreditBenefitInputCreditGrantTiming =
  | (typeof CreditBenefitInputCreditGrantTiming)[keyof typeof CreditBenefitInputCreditGrantTiming]
  | (string & {});

export const creditBenefitInputCreditGrantTimingSchema: EnumSchema<CreditBenefitInputCreditGrantTiming> =
  s.enumOf<CreditBenefitInputCreditGrantTiming>(CreditBenefitInputCreditGrantTiming);
