import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productCreditBenefitInputSchema,
  type ProductCreditBenefitInput,
} from "./product-credit-benefit-input.js";
import { productPricingInput15Schema, type ProductPricingInput15 } from "./unions/product-pricing-input15.js";

export type ProductAttributeUpsert = {
  productAttributeId?: string;
  name: string;
  active?: boolean;
  pricing: ProductPricingInput15;
  creditBenefits?: ProductCreditBenefitInput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productAttributeUpsertSchema: Schema<ProductAttributeUpsert> = s.object<ProductAttributeUpsert>(
  {
    productAttributeId: s.optional(s.string()),
    name: s.string(),
    active: s.optional(s.boolean()),
    pricing: productPricingInput15Schema,
    creditBenefits: s.optional(s.array(s.lazy(() => productCreditBenefitInputSchema))),
  },
  { additionalProperties: s.json() },
);
