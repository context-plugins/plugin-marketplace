import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductCreditBenefitInputCreditGrantTiming = {
  OnOrderActivation: "on_order_activation",
  OnPayment: "on_payment",
  OnInvoicePosted: "on_invoice_posted",
} as const;
export type ProductCreditBenefitInputCreditGrantTiming =
  | (typeof ProductCreditBenefitInputCreditGrantTiming)[keyof typeof ProductCreditBenefitInputCreditGrantTiming]
  | (string & {});

export const productCreditBenefitInputCreditGrantTimingSchema: EnumSchema<ProductCreditBenefitInputCreditGrantTiming> =
  s.enumOf<ProductCreditBenefitInputCreditGrantTiming>(ProductCreditBenefitInputCreditGrantTiming);
