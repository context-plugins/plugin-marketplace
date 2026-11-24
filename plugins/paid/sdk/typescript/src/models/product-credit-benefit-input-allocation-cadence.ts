import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductCreditBenefitInputAllocationCadence = {
  Upfront: "upfront",
  Monthly: "monthly",
} as const;
export type ProductCreditBenefitInputAllocationCadence =
  | (typeof ProductCreditBenefitInputAllocationCadence)[keyof typeof ProductCreditBenefitInputAllocationCadence]
  | (string & {});

export const productCreditBenefitInputAllocationCadenceSchema: EnumSchema<ProductCreditBenefitInputAllocationCadence> =
  s.enumOf<ProductCreditBenefitInputAllocationCadence>(ProductCreditBenefitInputAllocationCadence);
