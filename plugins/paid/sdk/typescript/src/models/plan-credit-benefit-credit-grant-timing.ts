import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlanCreditBenefitCreditGrantTiming = {
  OnPayment: "on_payment",
  OnInvoicePosted: "on_invoice_posted",
  OnOrderActivation: "on_order_activation",
} as const;
export type PlanCreditBenefitCreditGrantTiming =
  | (typeof PlanCreditBenefitCreditGrantTiming)[keyof typeof PlanCreditBenefitCreditGrantTiming]
  | (string & {});

export const planCreditBenefitCreditGrantTimingSchema: EnumSchema<PlanCreditBenefitCreditGrantTiming> =
  s.enumOf<PlanCreditBenefitCreditGrantTiming>(PlanCreditBenefitCreditGrantTiming);
