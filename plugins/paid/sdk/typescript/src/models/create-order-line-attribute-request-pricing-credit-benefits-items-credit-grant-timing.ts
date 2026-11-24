import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming = {
  OnPayment: "on_payment",
  OnInvoicePosted: "on_invoice_posted",
  OnOrderActivation: "on_order_activation",
} as const;
export type CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming =
  | (typeof CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming)[keyof typeof CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming]
  | (string & {});

export const createOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTimingSchema: EnumSchema<CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming> =
  s.enumOf<CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming>(
    CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming,
  );
