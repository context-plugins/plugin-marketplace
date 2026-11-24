import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipient = {
  Organization: "organization",
  Seat: "seat",
} as const;
export type CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipient =
  | (typeof CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipient)[keyof typeof CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipient]
  | (string & {});

export const createOrderLineAttributeRequestPricingCreditBenefitsItemsRecipientSchema: EnumSchema<CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipient> =
  s.enumOf<CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipient>(
    CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipient,
  );
