import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productCreditBenefitInputSchema,
  type ProductCreditBenefitInput,
} from "./product-credit-benefit-input.js";
import { productPricingInput15Schema, type ProductPricingInput15 } from "./unions/product-pricing-input15.js";

export type PlanAttributeInput = {
  /** Product attribute ID to override in this plan */
  productAttributeId: string;
  pricing: ProductPricingInput15;
  creditBenefits?: ProductCreditBenefitInput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planAttributeInputSchema: Schema<PlanAttributeInput> = s.object<PlanAttributeInput>(
  {
    productAttributeId: s.string(),
    pricing: productPricingInput15Schema,
    creditBenefits: s.optional(s.array(s.lazy(() => productCreditBenefitInputSchema))),
  },
  { additionalProperties: s.json() },
);
