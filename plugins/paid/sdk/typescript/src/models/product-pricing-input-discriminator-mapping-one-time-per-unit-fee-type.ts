import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeType = {
  Setup: "setup",
  Onboarding: "onboarding",
  Implementation: "implementation",
  Migration: "migration",
  Custom: "custom",
} as const;
export type ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeType =
  | (typeof ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeType)[keyof typeof ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeType]
  | (string & {});

export const productPricingInputDiscriminatorMappingOneTimePerUnitFeeTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeType>(
    ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeType,
  );
