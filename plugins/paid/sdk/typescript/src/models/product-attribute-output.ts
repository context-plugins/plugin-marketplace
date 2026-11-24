import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productCreditBenefitOutputSchema,
  type ProductCreditBenefitOutput,
} from "./product-credit-benefit-output.js";
import { productPricingOutputSchema, type ProductPricingOutput } from "./product-pricing-output.js";

export type ProductAttributeOutput = {
  productAttributeId: string;
  name: string;
  active: boolean;
  pricing: ProductPricingOutput;
  creditBenefits: ProductCreditBenefitOutput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productAttributeOutputSchema: Schema<ProductAttributeOutput> = s.object<ProductAttributeOutput>(
  {
    productAttributeId: s.string(),
    name: s.string(),
    active: s.boolean(),
    pricing: productPricingOutputSchema,
    creditBenefits: s.array(s.lazy(() => productCreditBenefitOutputSchema)),
  },
  { additionalProperties: s.json() },
);
