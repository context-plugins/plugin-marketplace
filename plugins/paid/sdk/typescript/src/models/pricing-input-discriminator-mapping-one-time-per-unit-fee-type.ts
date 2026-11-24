import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingOneTimePerUnitFeeType = {
  Setup: "setup",
  Onboarding: "onboarding",
  Implementation: "implementation",
  Migration: "migration",
  Custom: "custom",
} as const;
export type PricingInputDiscriminatorMappingOneTimePerUnitFeeType =
  | (typeof PricingInputDiscriminatorMappingOneTimePerUnitFeeType)[keyof typeof PricingInputDiscriminatorMappingOneTimePerUnitFeeType]
  | (string & {});

export const pricingInputDiscriminatorMappingOneTimePerUnitFeeTypeSchema: EnumSchema<PricingInputDiscriminatorMappingOneTimePerUnitFeeType> =
  s.enumOf<PricingInputDiscriminatorMappingOneTimePerUnitFeeType>(
    PricingInputDiscriminatorMappingOneTimePerUnitFeeType,
  );
